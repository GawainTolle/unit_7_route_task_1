import React, { useState, useEffect } from "react";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import api from "../api";
import GroupList from "./groupList";
import { paginate } from "../utils/paginate";
import UsersTable from "./usersTable";
import _ from "lodash";

const Users = () => {
  const pageSize = 8;
  const [activePage, setActivePage] = useState(1);
  const [professions, setProfessions] = useState();
  const [activeProf, setActiveProf] = useState();
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
  const [users, setUsers] = useState();
  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };
  const handleToggleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);
  useEffect(() => {
    setActivePage(1);
  }, [activeProf]);

  const handleActivePage = (id) => {
    setActivePage(id);
  };
  const handleActiveProf = (id) => {
    setActiveProf(id);
  };
  const handleSort = (id) => {
    setSortBy(id);
  };

  if (users) {
    const filteredUsers = activeProf
      ? users.filter(
          (user) =>
            JSON.stringify(user.profession) === JSON.stringify(activeProf)
        )
      : users;
    const usersLength = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);
    const cropUsers = paginate(sortedUsers, activePage, pageSize);
    const clearUsers = () => {
      setActiveProf();
    };
    return (
      <div className="d-flex">
        {professions && (
          <div className="d-flex flex-column">
            <GroupList
              {...{
                items: professions,
                activeItem: activeProf,
                onProf: handleActiveProf
              }}
            />
            <button className="btn btn-info" onClick={clearUsers}>
              Очистить
            </button>
          </div>
        )}
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center">
            <SearchStatus length={filteredUsers.length} />
          </div>
          {filteredUsers.length > 0 && (
            <UsersTable
              {...{
                users: cropUsers,
                onSort: handleSort,
                sortBy,
                onDelete: handleDelete,
                onToggle: handleToggleBookmark
              }}
            />
          )}
          <div className="d-flex justify-content-center">
            <Pagination
              {...{
                usersLength,
                pageSize,
                activePage,
                onPage: handleActivePage
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <h1>
      <span className="badge bg-info">loading...</span>
    </h1>
  );
};

export default Users;
