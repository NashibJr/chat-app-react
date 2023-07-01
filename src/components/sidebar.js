import React from "react";
import users from "../dummy/users";
import User from "./user";

const Sidebar = () => {
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
                    Marcus Rashford M.B.E
                  </h4>
                  <p className="fw-bold">@rashfordmbe</p>
                </div>
                <div>
                  <input
                    type="text"
                    className="input-content bg-light"
                    placeholder="Search"
                  />
                </div>
                <ul className="bg-light users">
                  {users.map((user) => (
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
