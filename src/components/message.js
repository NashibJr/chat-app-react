import React from "react";

const Message = ({ message, id }) => {
  return (
    <div
      className={
        message.receiverId === id
          ? "m-2 text-dark d-flex flex-wrap justify-content-start flex-colum"
          : "m-2 text-light d-flex flex-wrap justify-content-end flex-colum"
      }
    >
      <p
        className={
          message.receiverId === id
            ? "bg-light p-2 rounded-1 w-50 d-flex flex-column"
            : "bg-dark p-2 rounded-1 w-50 d-flex flex-column"
        }
      >
        {message?.data?.text}
        <span style={{ fontSize: "10px", color: "green" }}>
          from {message.sender.name}
        </span>
      </p>
    </div>
  );
};

export default Message;
