import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import NavigationBar from "../components/navigationBar";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import Messages from "../components/messages";
import { CometChat } from "@cometchat-pro/chat";
import { useParams } from "react-router-dom";
import helperFunctions from "../app/helperFunctions";
import SinglePage from "./singlePage";
import FriendsModal from "../modals/friendsModal";
import BlockModal from "../modals/blockModal";

const Main = () => {
  const listenerID = (Math.random() * 10000000).toFixed(0);
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [messages, setMessages] = useState([]);
  const [showPage, setShowPage] = useState(false);

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
    receiveMessages();
    fetchUsers();
  }, [id]);

  const fetchUsers = async () => {
    const response = await helperFunctions.getUsers();
    let data = response?.find((user) => user.uid === id);
    const name_ = data?.name;
    data = { ...data, handle: `@${name_.toLowerCase().split(" ")[0]}` };
    setUser(data);
  };
  const receiveMessages = async () => {
    try {
      const UID = id;
      const limit = 30;

      const messagesRequest = new CometChat.MessagesRequestBuilder()
        .setUID(UID)
        .setLimit(limit)
        .build();
      let messages_ = await messagesRequest.fetchPrevious();
      setMessages(messages_);
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToSinglePage = () => setShowPage(true);
  console.log(user);
  const hideSinglePage = () => setShowPage(false);

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
        <NavigationBar
          receiverName={user?.name}
          status={user?.status}
          navigateToSinglePage={navigateToSinglePage}
        />
        {!id ? (
          <h2>Nash chat App</h2>
        ) : (
          <div>
            {!showPage ? (
              <Messages id={id} messages={messages} />
            ) : (
              <SinglePage user={user} hideSinglePage={hideSinglePage} />
            )}
          </div>
        )}
      </div>
      <FriendsModal />
      <BlockModal id={id} />
    </div>
  );
};

export default Main;
