import React, { useEffect, useState } from "react";
import User from "./user";
import { useSelector } from "react-redux";
import helperFunctions from "../app/helperFunctions";
import Button from "./button";

const Sidebar = () => {
  const [searchedUserName, setSearchUserName] = useState("");
  const [wantedUsers, setWantedUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    searchUsers();
    fetchUsers();
  }, [searchedUserName]);

  const user = useSelector((state) => state.user);
  const username = user.name;
  const handle = `@${username?.toLowerCase().split(" ")[0]}`;

  const fetchUsers = async () => {
    const cometchatUsers = await helperFunctions.getUsers();
    setUsers(cometchatUsers);
  };

  const searchUsers = () => {
    const searchedUsers = users.filter((user) =>
      user.name.includes(searchedUserName)
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
                    <Button
                      class_name="btn btn-dark"
                      dismiss="#exampleModal"
                      label="Explore friends"
                    />
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
                    <User key={user.uid} user={user} />
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
