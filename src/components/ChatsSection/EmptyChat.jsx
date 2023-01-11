import React from "react";

import "./EmptyChat.css";

const EmptyChat = () => {
  return (
    <div id="rightChats">
      <img
        id="rightChats-img"
        src={require("../../assests/_images/emptychats.png")}
      ></img>
      <h2 id="rightChats-h2">Select a conversation!</h2>
    </div>
  );
};

export default EmptyChat;
