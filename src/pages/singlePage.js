import React, { useState } from "react";
import Button from "../components/button";
import { CometChat } from "@cometchat-pro/chat";

const SinglePage = ({
  hideSinglePage,
  user: { avatar, name, handle, blockedByMe, uid },
  handleBlock,
}) => {
  const [unblockMessage, setUnblockMessage] = useState("");

  const handleUnblock = async () => {
    try {
      await CometChat.unblockUsers([uid]);
      setUnblockMessage("Unblocked");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="m-4">
      <button type="button" onClick={hideSinglePage} className="btn btn-dark">
        Back
      </button>
      <div className="mt-5">
        <img src={avatar} width="100px" height="100px" alt="" />
        <p className="fw-bold mt-4">{name}</p>
        <p style={{ marginTop: -10 }}>{handle}</p>
        {!blockedByMe ? (
          <Button
            class_name="btn btn-danger mt-5 fw-bold"
            dismiss="#comfirm"
            label="Block"
            handleClick={handleBlock}
            modal="modal"
          />
        ) : (
          <Button
            class_name="btn btn-success mt-5 fw-bold"
            label={`${unblockMessage ? unblockMessage : "Unblock"}`}
            handleClick={handleUnblock}
          />
        )}
      </div>
    </div>
  );
};

export default SinglePage;
