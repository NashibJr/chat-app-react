import React from "react";

const NavigationBar = () => {
  return (
    <div
      className="m-2 p-2 rounded-4"
      style={{ backgroundColor: "rgba(211, 211, 211, .2)" }}
    >
      <div className="d-flex justify-content-between">
        <div>Henry Thiery</div>
        <button type="button" className="button-content">
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
