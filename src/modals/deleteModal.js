import React from "react";
import Modal from "./modal";

const DeleteModal = () => {
  return (
    <Modal title="Comfirm" modalID="comfirm">
      <p>Are you sure you want to block this user?</p>
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-danger w-50 m-1">
          Comfirm
        </button>
        <button
          type="button"
          className="btn btn-secondary w-50 m-1"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
