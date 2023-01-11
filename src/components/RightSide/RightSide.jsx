import React, { useContext } from "react";

import EmptyChat from "../ChatsSection/EmptyChat";
import { AccountContext } from "../../context/AccountProvider";
import ChatsSection from "../ChatsSection/ChatsSection";

import "./RightSide.css";

const RightSide = () => {
  const { person } = useContext(AccountContext);

  return (
    <div id="please-krja">{person ? <ChatsSection /> : <EmptyChat />}</div>
  );
};

export default RightSide;
