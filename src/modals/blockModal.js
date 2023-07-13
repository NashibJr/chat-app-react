import React, { useState } from "react";
import Modal from "./modal";
import { CometChat } from "@cometchat-pro/chat";
import Button from "../components/button";

const BlockModal = ({ id }) => {
  const [blockMessage, setBlockMessage] = useState("");

  const handleBlock = async () => {
    try {
      await CometChat.blockUsers([id]);
      setBlockMessage("Successfully blocked!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal title="Comfirm" modalID="comfirm">
      <p>Are you sure you want to block this user?</p>
      <p style={{ fontSize: 10 }} className="text-success">
        {blockMessage}
      </p>
      <div className="d-flex justify-content-between">
        <Button
          label="Comfirm"
          class_name="btn btn-danger w-50 m-1"
          handleClick={handleBlock}
        />
        <Button
          class_name="btn btn-secondary w-50 m-1"
          dismissModal="modal"
          label="Cancel"
        />
      </div>
    </Modal>
  );
};

export default BlockModal;
