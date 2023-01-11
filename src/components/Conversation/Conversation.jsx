import React, { useContext, useEffect, useState } from "react";

import { setConversation, getConversation } from "../../service/api";
import { AccountContext } from "../../context/AccountProvider";
import { formateDate } from "../../utils/formatDate";

import "./Conversation.css";

// used to set user to talk to
const Conversation = ({ user }) => {
  // latest msg and it's time
  const [msg, setMsg] = useState();
  const [time, setTime] = useState();

  const { setPerson, account, flagMsg } = useContext(AccountContext);

  // sets person to user clicked on
  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  // used to show latest msg on left.. flagMsg pr it updates each time a new msg is sent
  useEffect(() => {
    const getConvDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });

      setMsg(data.message);
      setTime(data.updatedAt);
    };

    getConvDetails();
  }, [flagMsg]);

  return (
    <div id="single-conversation" onClick={() => getUser()}>
      <div>
        <img id="conversation-photo" src={user.picture} alt="dp" />
      </div>
      <div id="single-sonversation-details">
        <h4 id="conversation-name">{user.name}</h4>
        <div id="single-sonversation-details-2">
          <p>{msg}</p>
          {msg && <p>{formateDate(time)}</p>}
        </div>
      </div>
    </div>
  );
};

export default Conversation;
