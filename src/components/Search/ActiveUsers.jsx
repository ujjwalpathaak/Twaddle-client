import React, { useCallback, useContext, useEffect, useState } from "react";
import { setConversation } from "../../service/api";
import { SocketContext } from "../../context/SocketProvider";
import { AccountContext } from "../../context/AccountProvider";

import "./ActiveUsers.css";

const ActiveUsers = () => {
  const { socket } = useContext(SocketContext);
  const { account, setPerson } = useContext(AccountContext);
  const [active, setActive] = useState([]);

  const getUser = async (user) => {
    console.log("clicked")
    setPerson(user)
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  const handleActiveUsers = useCallback(
    (data) => {
      const response = data.filter((curr) => {
        return curr.sub !== account.sub;
      });
      // console.log(response)
      setActive(response);
    },
    [account.sub]
  );

  // };

  useEffect(() => {
    // console.log(account)
    socket.current.emit("getActiveUsers", account);
    socket.current.on("activeUsers", handleActiveUsers);
  }, [socket, account, handleActiveUsers]);

  return (
    <>
      <div id="active-section">
        <p>Active Users</p>
        {active.map((curr) => {
          return (
            <div key={curr.sub} onClick={() => getUser(curr)}>
              <img id="active-pictures" alt="" src={curr.picture} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ActiveUsers;
