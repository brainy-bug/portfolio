import React, { useContext, useState, useEffect } from "react";
import { useFetchContext } from "./FetchContext";

const FilterContext = React.createContext();
export const FilterProvider = ({ children }) => {
  const { projects } = useFetchContext();
  const [singleCategory, setSingleCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    setAllProjects([...projects]);
  }, [projects]);

  useEffect(() => {
    const allCategories = [
      "All",
      ...new Set(allProjects.map((item) => item.category)),
    ];
    setCategories(allCategories);
  }, [allProjects]);

  const filterProjects = (category) => {
    let tempProjects = [...allProjects];
    if (category === "All") {
      setFilteredProjects(tempProjects);
      return;
    }
    setFilteredProjects(() =>
      tempProjects.filter((project) => project.category === category)
    );
  };

  useEffect(() => {
    filterProjects(singleCategory);
  }, [allProjects, singleCategory]);

  return (
    <FilterContext.Provider
      value={{
        filteredProjects,
        categories,
        singleCategory,
        setSingleCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
