import React from "react";

const Button = ({
  class_name,
  dismiss,
  label,
  handleClick,
  modal,
  dismissModal,
}) => {
  return (
    <button
      type="button"
      className={class_name}
      data-bs-toggle={modal}
      data-bs-target={dismiss}
      onClick={handleClick}
      data-bs-dismiss={dismissModal}
    >
      {label}
    </button>
  );
};

export default Button;
