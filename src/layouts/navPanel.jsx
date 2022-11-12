import React from "react";
import { Link } from "react-router-dom";

const navPanel = () => {
  return (
    <div className="d-flex flex-row ">
      <div className="p-2">
        <Link to="/">Main</Link>
      </div>
      <div className="p-2">
        <Link to="/login">Login</Link>
      </div>
      <div className="p-2">
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
};

export default navPanel;
