import React from "react";
import PropTypes from "prop-types";
import Bookmark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";
import { Link } from "react-router-dom";

const UsersTable = ({ users, onSort, sortBy, onDelete, ...rest }) => {
  const columns = {
    name: {
      iter: "name",
      name: "Имя",
      funky: (user) => <Link to={`/users/${user._id}`}>{user.name}</Link>
    },
    qualities: {
      name: "Качества",
      funky: (lol) => <QualitiesList qualities={lol.qualities} />
    },
    profession: { iter: "profession.name", name: "Профессия" },
    completedMeetings: { iter: "completedMeetings", name: "Встретился, раз" },
    rate: { iter: "rate", name: "Оценка" },
    bookmark: {
      iter: "bookmark",
      name: "Избранное",
      funky: (lol) => (
        <Bookmark {...{ id: lol._id, bookmark: lol.bookmark }} {...rest} />
      )
    },
    delete: {
      funky: (lol) => (
        <button className="btn btn-danger" onClick={() => onDelete(lol._id)}>
          Удалить
        </button>
      )
    }
  };
  return <Table {...{ sortBy, data: users, onSort, columns }} />;
};
UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,

  sortBy: PropTypes.object.isRequired
};

export default UsersTable;
