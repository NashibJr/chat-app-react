import React from "react";

const Button = ({ class_name, dismiss, label, handleClick }) => {
  return (
    <button
      type="button"
      className={class_name}
      data-bs-toggle="modal"
      data-bs-target={dismiss}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
