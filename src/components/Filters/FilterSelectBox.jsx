import { useState } from "react";
import FilterSelectList from "./FilterSelectList";

const FilterSelectBox = () => {
  const [isSelectBtnActive, setIsSelectBtnActive] = useState(false);
  const [updatedCategory, setUpdatedCategory] = useState("All");

  const filterProps = {
    updatedCategory,
    setUpdatedCategory,
    setIsSelectBtnActive,
  };

  return (
    <>
      <FilterSelectList filterProps={filterProps} />
      <div className='filter-select-box'>
        <button
          className={`${
            isSelectBtnActive ? "filter-select active" : "filter-select"
          }`}
          onClick={() => setIsSelectBtnActive((prev) => !prev)}
        >
          <div className='select-value'>{`${
            updatedCategory === "All" ? "Select category" : updatedCategory
          }`}</div>

          <div className='select-icon'>
            <ion-icon
              name={`${isSelectBtnActive ? "chevron-up" : "chevron-down"}`}
            ></ion-icon>
          </div>
        </button>
        <FilterSelectList
          filterProps={filterProps}
          isSelectBtnActive={isSelectBtnActive}
        />
      </div>
    </>
  );
};

export default FilterSelectBox;
