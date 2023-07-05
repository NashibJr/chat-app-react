import React, { useEffect, useState } from "react";
import users from "../dummy/users";
import User from "./user";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [searchedUserName, setSearchUserName] = useState("");
  const [wantedUsers, setWantedUsers] = useState([]);
  useEffect(() => {
    searchUsers();
  }, [searchedUserName]);
  const user = useSelector((state) => state.user);
  const username = user.user.name;
  const handle = `@${username.toLowerCase().split(" ")[0]}`;
  const searchUsers = () => {
    const searchedUsers = users.filter((user) =>
      user.username.includes(searchedUserName)
    );
    setWantedUsers(searchedUsers);
  };

  const renderedUsers = searchedUserName === "" ? users : wantedUsers;
  return (
    <nav className="fixed-left">
      {" "}
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto px-0">
            <div id="sidebar" className="collapse collapse-horizontal show">
              <div id="sidebar-nav" className="list-group border-0 rounded-0">
                <div className="p-2">
                  <h4 style={{ width: "100%" }} className="fw-bold">
                    {username}
                  </h4>
                  <span className="d-flex flex-wrap justify-content-between">
                    <p className="fw-bold">{handle}</p>
                    <button
                      type="button"
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Explore friends
                    </button>
                  </span>
                </div>
                <div>
                  <input
                    type="text"
                    className="input-content bg-light"
                    placeholder="Search"
                    onChange={(event) => setSearchUserName(event.target.value)}
                  />
                </div>
                <ul className="bg-light users">
                  {renderedUsers.map((user) => (
                    <User key={user.id} user={user} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
