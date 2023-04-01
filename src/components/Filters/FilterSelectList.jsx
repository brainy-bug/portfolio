const FilterSelectList = ({ isSelectBtnActive }) => {
  return (
    <ul className={`${isSelectBtnActive ? "select-list" : "filter-list"}`}>
      <li className={`${isSelectBtnActive ? "select-item" : "filter-item"}`}>
        <button className='active'>All</button>
      </li>

      <li className={`${isSelectBtnActive ? "select-item" : "filter-item"}`}>
        <button>Graphic design</button>
      </li>

      <li className={`${isSelectBtnActive ? "select-item" : "filter-item"}`}>
        <button>Web development</button>
      </li>
    </ul>
  );
};

export default FilterSelectList;
