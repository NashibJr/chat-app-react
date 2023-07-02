import React from "react";

const Input = ({
  attributes: { type, name, value, placeholder },
  style,
  handleChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      className="input-content"
      placeholder={placeholder}
      style={style}
    />
  );
};

export default Input;
