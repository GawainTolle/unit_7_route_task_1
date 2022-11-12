import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const TableBody = ({ data, columns }) => {
  const renderContent = (column, item) => {
    const funky = columns[column].funky;
    if (funky) {
      if (typeof funky === "function") {
        return funky(item);
      }
      return funky;
    }
    return _.get(item, columns[column].iter);
  };

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {Object.keys(columns).map((column) => (
            <td key={column}>{renderContent(column, item)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.object.isRequired
};

export default TableBody;
