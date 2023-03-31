const FilterSelectList = ({ isFilterActive }) => {
  return (
    <ul className={`${isFilterActive ? "filter" : "select"}-list`}>
      <li className={`${isFilterActive ? "filter" : "select"}-item`}>
        <button className='active'>All</button>
      </li>

      <li className={`${isFilterActive ? "filter" : "select"}-item`}>
        <button>Graphic design</button>
      </li>

      <li className={`${isFilterActive ? "filter" : "select"}-item`}>
        <button>Web development</button>
      </li>
    </ul>
  );
};

export default FilterSelectList;
