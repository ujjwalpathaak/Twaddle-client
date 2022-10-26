import React from "react";
import { useEffect, useContext, useState, useRef } from "react";
import "../components/ChatsMain.css";
import { getMessage } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";
import "./ChatsMain.css";
const ChatsMain = ({ person, conversation, flagMsg }) => {
  const { account, socket } = useContext(AccountContext);
  const scrollRef = useRef();
  const [messages, setMessages] = useState([]);

  const [incomingMessage, setIncomingMessage] = useState(null);

  const TextMessage1 = ({ message }) => {
    return (
      <>
        <p className="text">{message.text}</p>
        <p className="to-hide" id="other-time-of-msg2">
          {formatDate(message.createdAt)}
        </p>
      </>
    );
  };
  const TextMessage2 = ({ message }) => {
    return (
      <>
        <p className="text">{message.text}</p>
        <p id="other-time-of-msg">{formatDate(message.createdAt)}</p>
      </>
    );
  };
  const TextMessage3 = ({ message }) => {
    return (
      <>
        <p className="text">{message.text}</p>
        <p id="own-time-of-msg">{formatDate(message.createdAt)}</p>
      </>
    );
  };
  const TextMessage4 = ({ message }) => {
    return (
      <>
        <p className="text">{message.text}</p>
        <p className="to-hide" id="own-time-of-msg2">
          {formatDate(message.createdAt)}
        </p>
      </>
    );
  };

  const ImageMessage1 = ({ message }) => {
    return (
      <div>
        {message?.text?.includes(".pdf") ? (
          <div style={{ display: "flex" }}>
            <img
              style={{ display: "none", cursor: "pointer", width: "80px" }}
              onClick={(e) => downloadMedia(e, message.text)}
              src={require("../../../assests/_images/file.png")}
              alt="pdf-icon"
            />
            <p
              style={{
                fontSize: "14",
                display: "flex",
                margin: "0",
                alignItems: "center",
              }}
            >
              {message.text.split("blog-").pop()}
            </p>
          </div>
        ) : (
          <img
            onClick={(e) => downloadMedia(e, message.text)}
            style={{
              display: "none",
              backgroundColor: "white",
              width: 300,
              height: "100%",
              objectFit: "cover",
            }}
            src={message.text}
            alt={message.text}
          />
        )}
        <p className="to-hide" id="other-time-of-msg2">
          {formatDate(message.createdAt)}
        </p>
      </div>
    );
  };
  const ImageMessage2 = ({ message }) => {
    return (
      <div>
        {message?.text?.includes(".pdf") ? (
          <div style={{ display: "flex" }}>
            <img
              style={{ cursor: "pointer", width: "80px" }}
              onClick={(e) => downloadMedia(e, message.text)}
              src={require("../../../assests/_images/file.png")}
              alt="pdf-icon"
            />
            <p
              style={{
                fontSize: "14",
                display: "flex",
                margin: "0",
                alignItems: "center",
              }}
            >
              {message.text.split("blog-").pop()}
            </p>
            <p id="other-time-of-msg">{formatDate(message.createdAt)}</p>
          </div>
        ) : (
          <img
            onClick={(e) => downloadMedia(e, message.text)}
            style={{
              border: "solid black 1px",
              padding: "5px",
              backgroundColor: "white",
              width: 300,
              height: "100%",
              objectFit: "cover",
            }}
            src={message.text}
            alt={message.text}
          />
        )}
      </div>
    );
  };
  const ImageMessage3 = ({ message }) => {
    return (
      <div>
        {message?.text?.includes(".pdf") ? (
          <div style={{ display: "flex" }}>
            <img
              style={{ cursor: "pointer", width: "80px" }}
              onClick={(e) => downloadMedia(e, message.text)}
              src={require("../../../assests/_images/file.png")}
              alt="pdf-icon"
            />
            <p
              style={{
                fontSize: "14",
                display: "flex",
                margin: "0",
                alignItems: "center",
              }}
            >
              {message.text.split("blog-").pop()}
            </p>
            <p id="own-time-of-msg">{formatDate(message.createdAt)}</p>
          </div>
        ) : (
          <img
            onClick={(e) => downloadMedia(e, message.text)}
            style={{
              border: "solid black 1px",
              padding: "5px",
              backgroundColor: "white",
              width: 300,
              height: "100%",
              objectFit: "cover",
            }}
            src={message.text}
            alt={message.text}
          />
        )}
      </div>
    );
  };
  const ImageMessage4 = ({ message }) => {
    return (
      <div>
        {message?.text?.includes(".pdf") ? (
          <div style={{ display: "flex" }}>
            <img
              style={{ display: "none", cursor: "pointer", width: "80px" }}
              onClick={(e) => downloadMedia(e, message.text)}
              src={require("../../../assests/_images/file.png")}
              alt="pdf-icon"
            />
            <p
              style={{
                fontSize: "14",
                display: "flex",
                margin: "0",
                alignItems: "center",
              }}
            >
              {message.text.split("blog-").pop()}
            </p>
          </div>
        ) : (
          <img
            onClick={(e) => downloadMedia(e, message.text)}
            style={{
              display: "none",
              backgroundColor: "white",
              width: 300,
              height: "100%",
              objectFit: "cover",
            }}
            src={message.text}
            alt={message.text}
          />
        )}
        <p className="to-hide" id="own-time-of-msg2">
          {formatDate(message.createdAt)}
        </p>
      </div>
    );
  };

  const downloadMedia = async (e, originalImage) => {
    e.preventDefault();
    try {
      fetch(originalImage)
        .then((resp) => resp.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;

          const nameSplit = originalImage.split("/");
          const duplicateName = nameSplit.pop();

          // the filename you want
          a.download = "" + duplicateName + "";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        })
        .catch((error) =>
          console.log("Error while downloading the image ", error)
        );
    } catch (error) {
      console.log("Error while downloading the image ", error);
    }
  };

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  const formatDate = (date) => {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  };

  useEffect(() => {
    const getMsg = async () => {
      let data = await getMessage(conversation._id);
      if (data === undefined) {
        console.log("saved from crash");
        return;
      }
      setMessages(data);
    };
    conversation._id && getMsg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [person._id, conversation._id, flagMsg]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  return (
    <div id="ChatsMain">
      <div id="ChatsMain-own">
        {messages.map((message) => (
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
