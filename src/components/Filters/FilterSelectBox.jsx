import { useAppContext } from "../../contexts/AppContext";
import FilterSelectList from "./FilterSelectList";

const FilterSelectBox = () => {
  const { isFilterActive, setIsFilterActive } = useAppContext();

  return (
    <>
      <FilterSelectList isFilterActive={isFilterActive} />
      <div className='filter-select-box'>
        <button
          className='filter-select active'
          onClick={() => setIsFilterActive((prev) => !prev)}
        >
          <div className='select-value'>Select category</div>

          <div className='select-icon'>
            <ion-icon name='chevron-down'></ion-icon>
          </div>
        </button>
        <FilterSelectList isFilterActive={isFilterActive} />
      </div>
    </>
  );
};

export default FilterSelectBox;
