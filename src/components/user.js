import React from "react";

const User = ({ user: { username, handle } }) => {
  return (
    <li className="user-list d-flex justify-content-between">
      <div>
        <p className="h6 fw-bold">{username}</p>
        <p style={{ fontSize: 12, marginTop: -5 }}>{handle}</p>
      </div>
      <div>
        <p style={{ fontSize: 12 }}>12 Apr</p>
      </div>
    </li>
  );
};

export default User;
