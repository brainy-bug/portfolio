import { useAppContext } from "../../contexts/AppContext";
import FilterSelectList from "./FilterSelectList";

const FilterSelectBox = () => {
  const { isSelectBtnActive, setIsSelectBtnActive } = useAppContext();

  return (
    <>
      <FilterSelectList />
      <div className='filter-select-box'>
        <button
          className={`${
            isSelectBtnActive ? "filter-select active" : "filter-select"
          }`}
          onClick={() => setIsSelectBtnActive((prev) => !prev)}
        >
          <div className='select-value'>Select category</div>

          <div className='select-icon'>
            <ion-icon
              name={`${isSelectBtnActive ? "chevron" : "chevron-down"}`}
            ></ion-icon>
          </div>
        </button>
        <FilterSelectList isSelectBtnActive={isSelectBtnActive} />
      </div>
    </>
  );
};

export default FilterSelectBox;
