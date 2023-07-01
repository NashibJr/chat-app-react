import React from "react";

const User = ({ user: { username, handle } }) => {
  return (
    <li className="user-list d-flex justify-content-between">
      <div>
        <p className="h6 fw-bold">{username}</p>
        <p style={{ fontSize: 12, marginTop: -5 }}>{handle}</p>
      </div>
      <div
        className="d-flex flex-column justify-content-end align-items-end"
        style={{ fontSize: 12 }}
      >
        <p>12 Apr</p>
        <p className="text-success" style={{ marginTop: -15 }}>
          2
        </p>
      </div>
    </li>
  );
};

export default User;
