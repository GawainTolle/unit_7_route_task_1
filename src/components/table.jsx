import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./tableHeader";
import PropTypes from "prop-types";

const Table = ({ onSort, sortBy, columns, data, children }) => {
  return (
    <table className="table table-info table-striped-columns">
      {children || (
        <>
          <TableHeader {...{ onSort, sortBy, columns }} />
          <TableBody {...{ data, columns }} />
        </>
      )}
    </table>
  );
};
Table.propTypes = {
  onSort: PropTypes.func.isRequired,
  sortBy: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  children: PropTypes.array
};

export default Table;
