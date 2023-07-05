import React, { useEffect, useState } from "react";
import Input from "../components/input";
import { CometChat } from "@cometchat-pro/chat";
import { useNavigate } from "react-router-dom";

const style = {
  backgroundColor: "rgb(241, 240, 245)",
  border: "1px solid #000",
};

const Login = () => {
  const [state, setState] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  useEffect(() => {
    const listenerID = (Math.random() * 10000000).toFixed(0);
    CometChat.addLoginListener(
      listenerID,
      new CometChat.LoginListener({
        logoutSuccess: () => {
          console.log("logoutSuccess");
        },
        logoutFailure: (e) => {
          console.log("logoutFailure", e);
        },
      })
    );
  }, []);
  const attributes = [
    {
      type: "text",
      name: "username",
      value: state.username,
      placeholder: "Username",
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

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const authKey = "34334c22113e7a65f55f152f32f894bc270e6a21";
      const { password } = state;
      const user = await CometChat.getLoggedinUser();
      if (!user) {
        const user_ = await CometChat.login(password, authKey);
        navigate("/main");
        console.log("successfully loggedin", user_);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="mx-auto mt-5 d-flex flex-column justify-content-center align-items-center"
      style={{ transform: "translateY(5vh)" }}
    >
      <p className="fw-bold h3">Nash ChapApp</p>
      <form className="form-content mt-4">
        <p className="fw-bold h3">Login</p>
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
        <button
          type="button"
          className="input-content"
          style={{ backgroundColor: "#000", color: "#fff" }}
          onClick={handleLogin}
        >
          Login
        </button>
        <p>
          or create an account <a href="/signup">signup</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
