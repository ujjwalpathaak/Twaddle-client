import React, { useEffect, useContext, useState, useRef } from "react";

import { getMessage } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";
import { SocketContext } from "../../../context/SocketProvider";
import {
  TextMessage1,
  TextMessage2,
  TextMessage4,
  TextMessage3,
} from "../../../utils/formatMessage";
import {
  ImageMessage1,
  ImageMessage2,
  ImageMessage4,
  ImageMessage3,
} from "../../../utils/formatMessage";

import "./ChatsMain.css";

const ChatsMain = ({ conversation, flagMsg }) => {
  const scrollRef = useRef();

  const { person, account } = useContext(AccountContext);
  const { socket } = useContext(SocketContext);

  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });
  }, [socket]);

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  useEffect(() => {
    const getMsg = async () => {
      let data = await getMessage(conversation?._id);
      if (data === undefined) {
        console.log("saved from crash");
        return;
      }
      setMessages(data);
    };
    getMsg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversation?._id, person._id, flagMsg]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  // Basic Structure :-
  // renders all messages on each side of the user... for sender it hides the receiver's message using display: none; and vice-versa. Same for the media type messages.
  return (
    <div id="ChatsMain">
      <div id="ChatsMain-own">
        {messages.map((message, index) => (
          <div id="single-msg">
            {account.sub === message.senderId ? (
              <div id="own-section" className="to-hide prevent-select own-msg">
                {message.type === "file" ? (
                  <ImageMessage1 message={message} />
                ) : (
                  <TextMessage1 message={message} />
                )}
              </div>
            ) : (
              <div id="other-section" className="other-msg">
                {message.type === "file" ? (
                  <ImageMessage2 message={message} />
                ) : (
                  <TextMessage2 message={message} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div id="ChatsMain-other">
        {messages.map((message) => (
          <div id="single-msg" ref={scrollRef}>
            {account.sub === message.senderId ? (
              <div id="own-section" className="own-msg">
                {message.type === "file" ? (
                  <ImageMessage3 message={message} />
                ) : (
                  <TextMessage3 message={message} />
                )}
              </div>
            ) : (
              <div
                id="other-section"
                className="to-hide prevent-select other-msg"
              >
                {message.type === "file" ? (
                  <ImageMessage4 message={message} />
                ) : (
                  <TextMessage4 message={message} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatsMain;
