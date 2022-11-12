import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../api";
import PropTypes from "prop-types";

const User = ({ match }) => {
  const [users, setUsers] = useState();
  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);

  const handleButton = () => {
    return history.push(`/users`);
  };
  const id = match.params.lol;
  const history = useHistory();
  const getUserById = (id) => {
    return users && users.find((user) => user._id.toString() === id);
  };
  const user = getUserById(id);
  if (user) {
    return (
      <div>
        <h3>
          <li>{user.name}</li>
          <li>Профессия: {user.profession.name}</li>
          <ul>
            Качества:{" "}
            {user.qualities.map((user) => (
              <li key={user._id} className={"badge m-2 bg-" + user.color}>
                {user.name}
              </li>
            ))}
          </ul>
          <li>Встретился, раз: {user.completedMeetings}</li>
          <li>Оценка: {user.rate}</li>
        </h3>

        <button className="btn btn-info" onClick={() => handleButton()}>
          Вернуться к пользователям
        </button>
      </div>
    );
  } else {
    return (
      <h1>
        <span className="badge bg-info">loading...</span>
      </h1>
    );
  }
};

User.propTypes = {
  match: PropTypes.object
};

export default User;
