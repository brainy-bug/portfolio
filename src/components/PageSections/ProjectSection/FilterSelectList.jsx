const FilterSelectList = ({ filterProps = {}, isSelectBtnActive }) => {
  const {
    setIsSelectBtnActive,
    categories,
    singleCategory,
    setSingleCategory,
  } = filterProps;

  const updateCategory = (e) => {
    setSingleCategory(e.target.textContent);
    setIsSelectBtnActive(false);
  };

  return (
    <ul className={`${isSelectBtnActive ? "select-list" : "filter-list"}`}>
      {categories.map((value, index) => {
        return (
          <li
            className={`${isSelectBtnActive ? "select-item" : "filter-item"}`}
            key={index}
          >
            <button
              className={`${singleCategory === value ? "active" : null}`}
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
