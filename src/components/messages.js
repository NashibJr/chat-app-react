import React, { useEffect, useState } from "react";
import { CometChat } from "@cometchat-pro/chat";
import { BiSolidSend } from "react-icons/bi";
import Message from "./message";

const Messages = ({ id }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    receiveMessages();
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

  const receiveMessages = async () => {
    try {
      const UID = id;
      const limit = 30;

      const messagesRequest = new CometChat.MessagesRequestBuilder()
        .setUID(UID)
        .setLimit(limit)
        .build();
      let messages_ = await messagesRequest.fetchPrevious();
      setMessages(messages_);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid mt-3 messages-content d-flex flex-column flex-wrap">
      <div className="messages">
        {messages.map((message, index) => (
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
