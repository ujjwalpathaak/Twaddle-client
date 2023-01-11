import React, { useEffect, useState, useContext } from "react";

import { getUsers } from "../../service/api";
import { AccountContext } from "../../context/AccountProvider";
import { SocketContext } from "../../context/SocketProvider";
import Conversation from "../Conversation/Conversation";

const Chats = () => {
  const { account, setActiveUsers, setFlagMsg } = useContext(AccountContext);
  const { socket } = useContext(SocketContext);

  // all users
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let users = await getUsers();
      setUsers(users);
    };

    fetchData();
  }, [setFlagMsg]);

  useEffect(() => {
    // to use socket... extract it from useContext
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, []);

  return Users.map(
    // for each user is current user matches the user in array dont display it.
    (user) =>
      user?.sub !== account.sub && (
        <div key={user.sub}>
          <Conversation user={user} />
        </div>
      )
  );
};

export default Chats;
