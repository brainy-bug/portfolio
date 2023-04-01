import { useState } from "react";
import { category } from "../../utils/constants";

const FilterSelectList = ({ filterProps = {} }) => {
  const {
    isSelectBtnActive,
    setIsSelectBtnActive,
    updatedCategory,
    setUpdatedCategory,
  } = filterProps;

  const updateCategory = (e) => {
    setUpdatedCategory(e.target.textContent);
    setIsSelectBtnActive(false);
  };

  return (
    <ul className={`${isSelectBtnActive ? "select-list" : "filter-list"}`}>
      {category.map((value, index) => {
        return (
          <li
            className={`${isSelectBtnActive ? "select-item" : "filter-item"}`}
            key={index}
          >
            <button
              className={`${updatedCategory === value ? "active" : null}`}
              onClick={updateCategory}
            >
              {value}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FilterSelectList;
