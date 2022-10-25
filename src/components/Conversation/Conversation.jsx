import React from "react";
import "./Conversation.css";
import { setConversation, getConversation } from "../../service/api";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
const Conversation = ({ user }) => {
  const [msg, setMsg] = useState({})
  const { setPerson, account, setFlagMsg, flagMsg } = useContext(AccountContext);
  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };
  const formatDate = (date) => {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();

   
    return `${hours < 10 ? "0" + hours: hours }:${
      minutes < 10 ? "0" + minutes  : minutes }`;
  };
  useEffect(() => {
    const getConvDetails = async () => {
      const data = await getConversation({senderId: account.sub, receiverId: user.sub })
      setMsg({text: data?.message, timestam: data?.updatedAt})
    }
    getConvDetails()
  }, [flagMsg])

  
  return (
    <div id="single-conversation" onClick={() => getUser()}>
      <div>

      <img id="conversation-photo" src={user.picture} alt="dp" />
      </div>
      <div id="single-sonversation-details">
      <h4 id="conversation-name">{user.name}</h4>
<div id="single-sonversation-details-2">

      <p>{msg?.text?.includes('localhost') ? 'media' : msg.text}</p>
      {
        msg?.text &&
        <p>{formatDate(msg?.timestam)}</p>
      }
      </div>
      </div>
    </div>
  );
};

export default Conversation;
