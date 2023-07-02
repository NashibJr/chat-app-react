import React from "react";
import Main from "./pages/main";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import FriendsModal from "./modals/friendsModal";

const App = () => {
  console.log(process.env.REACT_APP_ACCOUNT_KEY, ">>>>>");
  console.log(process.env.REACT_APP_AUTH_SECRET, "||||||");
  return (
    <div>
      <Signup />
      <FriendsModal />
    </div>
  );
};

export default App;
