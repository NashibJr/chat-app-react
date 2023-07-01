import React from "react";
import Sidebar from "../components/sidebar";
import NavigationBar from "../components/navigationBar";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

const Main = () => {
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
        <NavigationBar />
      </div>
    </div>
  );
};

export default Main;
