import React, { useEffect, useState } from "react";
import { CometChat } from "@cometchat-pro/chat";
import { BiSolidSend } from "react-icons/bi";
import Message from "./message";

const Messages = ({ id, messages }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getRealTimeMessages();
  }, [id]);

  const sendMessage = async () => {
    try {
      const receiverId = id;
      const messageText = message;
      const receiverType = CometChat.RECEIVER_TYPE.USER;
      const textMessage = new CometChat.TextMessage(
        receiverId,
        messageText,
        receiverType
      );
      await CometChat.sendMessage(textMessage);
      setMessage("");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const getRealTimeMessages = () => {
    try {
      let listenerID = (Math.random() * 100000).toFixed(0);
      CometChat.addMessageListener(
        listenerID,
        new CometChat.MessageListener({
          onTextMessageReceived: (textMessage) => {
            console.log("Text message received", textMessage);
          },
          onMediaMessageReceived: (mediaMessage) => {
            console.log("Media message received successfully", mediaMessage);
          },
          onCustomMessageReceived: (customMessage) => {
            console.log("Custom message received successfully", customMessage);
          },
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const sendMedia = async (event) => {
    try {
      const { files } = event.target;
      let receiverID = id;
      const messageType = CometChat.MESSAGE_TYPE.FILE;
      const receiverType = CometChat.RECEIVER_TYPE.USER;
      const mediaMessage = new CometChat.MediaMessage(
        receiverID,
        files[0],
        messageType,
        receiverType
      );
      await CometChat.sendMediaMessage(mediaMessage);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid mt-3 messages-content d-flex flex-column flex-wrap">
      <div className="messages">
        {messages?.map((message, index) => (
          <Message id={id} message={message} key={index} />
        ))}
      </div>
      <form style={{ marginTop: "auto", marginBottom: -12 }} className="d-flex">
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Type a message..."
          className="input-content bg-light"
          style={{ width: "99%" }}
          onChange={(event) => setMessage(event.target.value)}
        />
        <input
          type="file"
          name="img_file"
          accept="image/*"
          style={{
            width: 50,
            height: 38,
            transform: "translateY(13px)",
            marginRight: 5,
          }}
          onChange={sendMedia}
        />
        <button
          type="button"
          className="btn btn-dark rounded-4"
          style={{ width: 90, height: 38, transform: "translateY(13px)" }}
          onClick={sendMessage}
        >
          <BiSolidSend />
        </button>
      </form>
    </div>
  );
};

export default Messages;
