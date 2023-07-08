import React, { useEffect, useState } from "react";
import { CometChat } from "@cometchat-pro/chat";

const Messages = ({ id }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    receiveMessages();
    getRealTimeMessages();
  }, []);

  const sendMessage = async () => {
    try {
      const receiverId = { id };
      const messageText = message;
      const receiverType = CometChat.RECEIVER_TYPE.USER;
      const textMessage = new CometChat.TextMessage(
        receiverId,
        messageText,
        receiverType
      );
      const sentMessage = await CometChat.sendMessage(textMessage);
      console.log(sentMessage);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => console.log("hell world!!!");

  const getRealTimeMessages = () => {
    try {
      let listenerID = (Math.random() * 100000).toFixed(0);
      CometChat.addMessageListener(
        listenerID,
        new CometChat.MessageListener({
          onTextMessageReceived: (textMessage) => {
            console.log("Text message received successfully", textMessage);
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
      let UID = { id };
      let limit = 30;

      var messagesRequest = new CometChat.MessagesRequestBuilder()
        .setUID(UID)
        .setLimit(limit)
        .build();
      const messages_ = await messagesRequest.fetchPrevious();
      console.log(messages_);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid mt-3 messages-content d-flex flex-column flex-wrap">
      <div className="messages">
        <div className="m-2 text-dark d-flex flex-wrap justify-content-start flex-colum">
          <p className="bg-light p-2 rounded-1 w-50">Recieved messages</p>
        </div>
        <div className="m-2 text-light d-flex flex-wrap justify-content-end flex-colum">
          <p className="bg-dark p-2 rounded-1 w-50">Send messages</p>
        </div>
      </div>
      <form
        style={{ marginTop: "auto", marginBottom: -12 }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Type a message..."
          className="input-content bg-light"
          style={{ width: "99%" }}
          onChange={setMessage((event) => event.target.value)}
        />
      </form>
    </div>
  );
};

export default Messages;
