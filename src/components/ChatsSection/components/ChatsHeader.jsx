import React from "react";
import "../components/ChatsHeader.css";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
const ChatsHeader = ({ person }) => {
  const { activeUsers } = useContext(AccountContext);

  return (
    <div id="ChatsHeader">
      <div>
        <img id="chat-id" src={person.picture}></img>
        <div id="name-status"> 
        <h4>{person.name}</h4>
        <p id="status">
          {activeUsers ?.find((user) => user.sub === person.sub)
            ? "online"
            : "offline"}
        </p>
            </div>
      </div>

    </div>
  );
};

export default ChatsHeader;
