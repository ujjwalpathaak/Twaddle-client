import React from "react";
import EmptyChat from "../ChatsSection/EmptyChat";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import ChatsSection from "../ChatsSection/ChatsSection";
import "./RightSide.css"
const RightSide = () => {
  const { person } = useContext(AccountContext);
  return (
    <div id="please-krja">
      {Object.keys(person).length ?  <ChatsSection />: <EmptyChat />}
    </div>
  );
};

export default RightSide;
