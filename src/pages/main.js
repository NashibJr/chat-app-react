import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import NavigationBar from "../components/navigationBar";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import Messages from "../components/messages";
import { CometChat } from "@cometchat-pro/chat";
import { useParams } from "react-router-dom";
import helperFunctions from "../app/helperFunctions";

const Main = () => {
  const listenerID = (Math.random() * 10000000).toFixed(0);
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    CometChat.addLoginListener(
      listenerID,
      new CometChat.LoginListener({
        loginSuccess: (e) => {
          console.log("loginSuccess", e);
        },
        loginFailure: (e) => {
          console.log("loginFailure", e);
        },
      })
    );
    fetchUsers();
  }, [id]);

  const fetchUsers = async () => {
    const data = await helperFunctions.getUsers();
    setUser(data.find((user) => user.uid === id));
  };

  return (
    <div className="container-fluid d-flex">
      <Sidebar className="bg-danger" />
      <div className="col ps-md-2 pt-2 hide-collapse-button">
        <button
          data-bs-target="#sidebar"
          data-bs-toggle="collapse"
          className="border rounded-3 p-1 text-decoration-none"
        >
          <TbLayoutSidebarLeftCollapse />
        </button>
      </div>
      <div className="container-fluid">
        <NavigationBar receiverName={user.name} status={user.status} />
        {!id ? <h2>Nash chat App</h2> : <Messages id={id} />}
      </div>
    </div>
  );
};

export default Main;
