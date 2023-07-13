import React from "react";
import Main from "./pages/main";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import FriendsModal from "./modals/friendsModal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DeleteModal from "./modals/deleteModal";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main/:id" element={<Main />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      <FriendsModal />
      <DeleteModal />
    </div>
  );
};

export default App;
