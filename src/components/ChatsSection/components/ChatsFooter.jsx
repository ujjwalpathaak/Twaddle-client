import React from "react";
// import Picker from "emoji-picker-react";
import InputEmoji from "react-input-emoji";
import "../components/ChatsFooter.css";
import { useEffect, useContext, useState } from "react";
import { uploadFile } from "../../../service/api";
const ChatsFooter = ({ sendText, setValue, value, setFile, file, setImage }) => {
  const [show, setShow] = useState(false);

  const [text, setText] = useState("");

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        // console.log(data)
        setImage(response.data);
      }
    };
    getImage();
  }, [file]);

  const onFileChange = (e) => {
    setValue(e.target.files[0].name);
    setFile(e.target.files[0]);
  };

  return (
    <div id="ChatsFooter">
      <button className="footer-icon" id="attach-icon">
        <label htmlFor="file-input">
          <img
            className="footer-icon"
            src={require("../../../assests/_images/attach.png")}
            alt="temp"
            style={{ cursor: "pointer" }}
          ></img>
        </label>
      </button>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={(e) => onFileChange(e)}
        id="file-input"
      />

      <input
        id="chat-type"
        type="text"
        placeholder="Type a message"
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => sendText(e)}
        value={value}
      />
      <div>
        <button className="footer-icon" id="mic-icon">
          <img
            className="footer-icon"
            src={require("../../../assests/_images/mic.png")}
            alt="temp"
          ></img>
        </button>
      </div>
    </div>
  );
};
export default ChatsFooter;
