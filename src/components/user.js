import React from "react";
import { useNavigate } from "react-router-dom";

const User = ({ user: { name, handle, uid } }) => {
  const navigate = useNavigate();
  return (
    <li
      className="user-list d-flex justify-content-between"
      onClick={() => navigate(`/main/${uid}`)}
    >
      <div>
        <p className="h6 fw-bold">{name}</p>
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
