import React, { useContext, useState, useEffect } from "react";

import ChatsMain from "./components/ChatsMain";
import ChatsFooter from "./components/ChatsFooter";
import ChatsHeader from "./components/ChatsHeader";
import { AccountContext } from "../../context/AccountProvider";
import { SocketContext } from "../../context/SocketProvider";
import { getConversation, newMessage, getMessage } from "../../service/api";

import "./ChatsSection.css";

const ChatsSection = () => {
  const { person, account, setFlagMsg, flagMsg } = useContext(AccountContext);
  const { socket } = useContext(SocketContext);
  const [conversation, setConversation] = useState({});
  const [file, setFile] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState("");

  const sendText = async (e) => {
    // identifies which key
    const code = e.which;

    if (code === 13 && value) {
      let message = {};
      // normal
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          text: value,
          type: "text",
        };
      }
      // media
      else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          text: image,
          type: "file",
        };
      }

      socket.current.emit("sendMessage", message);
      await newMessage(message);
      setValue("");
      setFile("");
      setImage("");
      setFlagMsg((prev) => !prev);
    }
  };

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });

      setConversation(data);
    };
    getConversationDetails();
    // updates for each new person clikced
  }, [person.sub]);

  return (
    <div id="karja-kaam">
      <ChatsHeader person={person} />
      <ChatsMain conversation={conversation} flagMsg={flagMsg} />
      <ChatsFooter
        sendText={sendText}
        setValue={setValue}
        value={value}
        setFile={setFile}
        file={file}
        setImage={setImage}
      />
    </div>
  );
};

export default ChatsSection;
