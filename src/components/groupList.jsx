import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
  items,
  activeItem,
  onProf,
  valueProperty,
  contentProperty
}) => {
  if (!Array.isArray(items)) {
    return (
      <ul className="list-group">
        {Object.keys(items).map((item) => (
          <li
            key={items[item][valueProperty]}
            className={
              "list-group-item" + (items[item] === activeItem ? " active" : "")
            }
            onClick={() => onProf(items[item])}
            role="button"
          >
            {items[item][contentProperty]}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={"list-group-item" + (activeItem === item ? " active" : "")}
          onClick={() => onProf(item)}
          role="button"
        >
          {item[contentProperty]}
        </li>
      ))}
    </ul>
  );
};
GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name"
};
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  activeItem: PropTypes.object,
  onProf: PropTypes.func.isRequired,
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired
};

export default GroupList;
