import React from "react";
import Sidebar from "../components/sidebar";

const Main = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
          <Sidebar />
        </div>
        <div className="col-sm-9"></div>
      </div>
    </div>
  );
};

export default Main;
