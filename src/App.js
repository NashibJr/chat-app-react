import React from "react";
import Main from "./pages/main";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import FriendsModal from "./modals/friendsModal";

const App = () => {
  return (
    <div>
      <Main />
      <FriendsModal />
    </div>
  );
};

export default App;
