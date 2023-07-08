import React, { useEffect, useState } from "react";
import Input from "../components/input";
import { CometChat } from "@cometchat-pro/chat";
import { useNavigate } from "react-router-dom";
import { getUserCredentials } from "../redux/users/userSlice";
import { useDispatch } from "react-redux";

const style = {
  backgroundColor: "rgb(241, 240, 245)",
  border: "1px solid #000",
};

const Login = () => {
  const [state, setState] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

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

  const canSubmit = state.password && state.username;

  const handleChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const authKey = "8bccda8633ebf1a20a5ed594f48e37cc7d78c87f";
      const { password } = state;
      const user = await CometChat.getLoggedinUser();
      if (!user) {
        const user_ = await CometChat.login(password, authKey);
        alert("successfully loggedin");
        dispatch(getUserCredentials(user_));
        navigate("/main");
      }
    } catch (error) {
      setErrorMessage(error.message);
      if (errorMessage) {
        setMessage(
          "This account does not exist. Please check your details and try again."
        );
      }
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
          disabled={!canSubmit}
        >
          Login
        </button>
        <p
          style={{ fontSize: 12, marginBottom: 0 }}
          className="text-danger fw-bold text-center"
        >
          {message}
        </p>
        <p>
          or create an account <a href="/signup">signup</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
