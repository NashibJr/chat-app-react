import React from "react";

const NavigationBar = () => {
  return (
    <div
      className="m-2 p-2 rounded-4"
      style={{ backgroundColor: "rgba(211, 211, 211, .2)" }}
    >
      <div className="d-flex justify-content-between border-bottom p-1 pb-2">
        <div>Henry Thiery</div>
        <button type="button" className="button-content">
          <span>Logout</span>
        </button>
      </div>
      <form>
        <input
          type="text"
          placeholder="Search messages"
          className="input-content bg-light"
          style={{ width: "99.5%", marginBottom: 1, marginLeft: 1 }}
        />
      </form>
    </div>
  );
};

export default NavigationBar;
