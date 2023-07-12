import React from "react";

const SinglePage = ({ hideSinglePage, user: { avatar, name, handle } }) => {
  return (
    <div className="m-4">
      <button type="button" onClick={hideSinglePage} className="btn btn-dark">
        Back
      </button>
      <div className="mt-5">
        <img src={avatar} width="100px" height="100px" alt="" />
        <p className="fw-bold mt-4">{name}</p>
        <p style={{ marginTop: -10 }}>{handle}</p>
        <button type="button" className="btn btn-danger mt-5">
          Block
        </button>
      </div>
    </div>
  );
};

export default SinglePage;
