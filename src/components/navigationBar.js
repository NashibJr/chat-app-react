import React from "react";
import { CometChat } from "@cometchat-pro/chat";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUserOnLogout } from "../redux/users/userSlice";

const NavigationBar = ({ receiverName, status }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await CometChat.logout();
      dispatch(clearUserOnLogout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="m-2 p-2 rounded-4"
      style={{ backgroundColor: "rgba(211, 211, 211, .2)" }}
    >
      <div className="d-flex justify-content-between border-bottom p-1 pb-2">
        <div>
          {!receiverName ? <div>Connect with friends</div> : receiverName}
          <span
            style={{ color: "green", fontSize: 12, marginLeft: 5 }}
            className={status === "offline" ? "d-none" : "d-block"}
          >
            online
          </span>
        </div>
        <button type="button" className="button-content" onClick={handleLogout}>
          <span>Logout</span>
        </button>
      </div>
      <form>
        <input
          type="text"
          placeholder="Search messages"
          className="input-content bg-light"
          style={{ width: "99.5%", marginBottom: 1, marginLeft: 1 }}
        />
      </form>
    </div>
  );
};

export default NavigationBar;
