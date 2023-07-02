import React, { useState } from "react";
import Input from "../components/input";

const style = {
  backgroundColor: "rgb(241, 240, 245)",
  border: "1px solid #000",
};

const Signup = () => {
  const [state, setState] = useState({ username: "", password: "", email: "" });
  const attributes = [
    {
      type: "text",
      name: "username",
      value: state.username,
      placeholder: "Username",
    },
    {
      type: "email",
      name: "email",
      value: state.email,
      placeholder: "Email",
    },
    {
      type: "password",
      name: "password",
      value: state.password,
      placeholder: "Password",
    },
  ];

  const handleChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });
  return (
    <div
      className="mx-auto mt-5 d-flex flex-column justify-content-center align-items-center"
      style={{ transform: "translateY(5vh)" }}
    >
      <p className="fw-bold h3">Nash ChapApp</p>
      <form className="form-content mt-4">
        <p className="fw-bold h3">Signup</p>
        <Input
          attributes={attributes[0]}
          handleChange={handleChange}
          style={style}
        />
        <Input
          attributes={attributes[1]}
          handleChange={handleChange}
          style={style}
        />
        <Input
          attributes={attributes[2]}
          handleChange={handleChange}
          style={style}
        />
        <button
          type="button"
          className="input-content"
          style={{ backgroundColor: "#000", color: "#fff" }}
        >
          Signup
        </button>
        <p>
          have an account? <a href="#">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
