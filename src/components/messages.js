import React from "react";

const Messages = () => {
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
      <form style={{ marginTop: "auto", marginBottom: -12 }}>
        <input
          type="text"
          placeholder="Type a message..."
          className="input-content bg-light"
          style={{ width: "99%" }}
        />
      </form>
    </div>
  );
};

export default Messages;
