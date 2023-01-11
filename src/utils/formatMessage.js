import { formateDate } from "../utils/formatDate";
export const TextMessage1 = ({ message }) => {
  return (
    <>
      <p className="text">{message.text}</p>
      <p className="to-hide" id="other-time-of-msg2">
        {formateDate(message.createdAt)}
      </p>
    </>
  );
};
export const TextMessage2 = ({ message }) => {
  return (
    <>
      <p className="text">{message.text}</p>
      <p id="other-time-of-msg">{formateDate(message.createdAt)}</p>
    </>
  );
};
export const TextMessage3 = ({ message }) => {
  return (
    <>
      <p className="text">{message.text}</p>
      <p id="own-time-of-msg">{formateDate(message.createdAt)}</p>
    </>
  );
};
export const TextMessage4 = ({ message }) => {
  return (
    <>
      <p className="text">{message.text}</p>
      <p className="to-hide" id="own-time-of-msg2">
        {formateDate(message.createdAt)}
      </p>
    </>
  );
};

export const ImageMessage1 = ({ message }) => {
  return (
    <div>
      {message?.text?.includes(".pdf") ? (
        <div style={{ display: "flex" }}>
          <img
            style={{
              visibility: "hidden",
              cursor: "pointer",
              width: "5vw",
              minHeight: "60px",
              minWidth: "60px",
              height: "5vw",
            }}
            onClick={(e) => downloadMedia(e, message.text)}
            src={require("../assests/_images/file.png")}
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
            border: "solid transparent 1px",
            visibility: "hidden",
            backgroundColor: "white",
            width: "20vw",
            height: "100%",
            objectFit: "cover",
          }}
          src={message.text}
          alt={message.text}
        />
      )}
      <p className="to-hide" id="other-time-of-msg2">
        {formateDate(message.createdAt)}
      </p>
    </div>
  );
};
export const ImageMessage2 = ({ message }) => {
  return (
    <div>
      {message?.text?.includes(".pdf") ? (
        <div style={{ display: "flex" }}>
          <img
            style={{
              cursor: "pointer",
              width: "5vw",
              minHeight: "60px",
              minWidth: "60px",
              height: "5vw",
            }}
            onClick={(e) => downloadMedia(e, message.text)}
            src={require("../assests/_images/file.png")}
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
          <p id="other-time-of-msg">{formateDate(message.createdAt)}</p>
        </div>
      ) : (
        <img
          onClick={(e) => downloadMedia(e, message.text)}
          style={{
            border: "solid transparent 1px",
            padding: "5px",
            backgroundColor: "white",
            width: "20vw",
            height: "100%",
            objectFit: "cover",
          }}
          src={message.text}
          alt={message.text}
        />
      )}
      <p className="to-hide" id="other-time-of-msg2">
        {formateDate(message.createdAt)}
      </p>
    </div>
  );
};
export const ImageMessage3 = ({ message }) => {
  return (
    <div>
      {message?.text?.includes(".pdf") ? (
        <div style={{ display: "flex" }}>
          <img
            style={{
              cursor: "pointer",
              width: "5vw",
              minHeight: "60px",
              minWidth: "60px",
              height: "5vw",
            }}
            onClick={(e) => downloadMedia(e, message.text)}
            src={require("../assests/_images/file.png")}
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
          <p id="own-time-of-msg">{formateDate(message.createdAt)}</p>
        </div>
      ) : (
        <img
          onClick={(e) => downloadMedia(e, message.text)}
          style={{
            border: "solid black 1px",
            padding: "5px",
            backgroundColor: "white",
            width: "20vw",
            height: "100%",
            objectFit: "cover",
          }}
          src={message.text}
          alt={message.text}
        />
      )}
      <p className="to-hide" id="other-time-of-msg2">
        {formateDate(message.createdAt)}
      </p>
    </div>
  );
};
export const ImageMessage4 = ({ message }) => {
  return (
    <div>
      {message?.text?.includes(".pdf") ? (
        <div style={{ display: "flex" }}>
          <img
            style={{
              visibility: "hidden",
              cursor: "pointer",
              width: "5vw",
              minHeight: "60px",
              minWidth: "60px",
              height: "5vw",
            }}
            onClick={(e) => downloadMedia(e, message.text)}
            src={require("../assests/_images/file.png")}
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
            visibility: "hidden",
            backgroundColor: "white",
            width: "20vw",
            height: "100%",
            objectFit: "cover",
          }}
          src={message.text}
          alt={message.text}
        />
      )}
      <p className="to-hide" id="own-time-of-msg2">
        {formateDate(message.createdAt)}
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
