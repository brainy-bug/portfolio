import { useState } from "react";

import { useFilterContext } from "../../../contexts/FilterContext";
import FilterSelectList from "./FilterSelectList";

const FilterSelectBox = () => {
  const [isSelectBtnActive, setIsSelectBtnActive] = useState(false);
  const { categories, singleCategory, setSingleCategory } = useFilterContext();

  const filterProps = {
    categories,
    setIsSelectBtnActive,
    singleCategory,
    setSingleCategory,
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
            singleCategory === "All" ? "Select category" : singleCategory
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
