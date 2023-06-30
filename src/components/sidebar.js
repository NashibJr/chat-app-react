import React from "react";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import users from "../dummy/users";
import User from "./user";

const Sidebar = () => {
  return (
    <nav className="fixed-left navigation">
      {" "}
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto px-0">
            <div id="sidebar" className="collapse collapse-horizontal show">
              <div id="sidebar-nav" className="list-group border-0 rounded-0">
                <div className="p-2">
                  <h4 style={{ width: "45vh" }} className="fw-bold">
                    Marcus Rashford M.B.E
                  </h4>
                  <p>@john</p>
                </div>
                <div>
                  <input
                    type="text"
                    className="input-content bg-light"
                    placeholder="Search"
                  />
                </div>
                <ul className="bg-light users">
                  <li></li>
                  {users.map((user) => (
                    <User key={user.id} user={user} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col ps-md-2 pt-2">
            <a
              href="#"
              data-bs-target="#sidebar"
              data-bs-toggle="collapse"
              className="border rounded-3 p-1 text-decoration-none"
            >
              <TbLayoutSidebarLeftCollapse />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
