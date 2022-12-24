import React from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { getUsers } from "../../service/api";
import { AccountContext } from "../../context/AccountProvider";

import Conversation from "../Conversation/Conversation";
const Chats = () => {
  const { socket, account, setActiveUsers, setFlagMsg } = useContext(AccountContext);
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await getUsers();
      // console.log(data)
      setUsers(data);
    };
    fetchData();
  }, [setFlagMsg]);

  useEffect(() => {
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);

  return Users.map(
    (user) => user?.sub !== account.sub && <Conversation user={user} />
  );
  
};

export default Chats;
