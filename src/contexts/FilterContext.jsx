import React, { useContext, useState, useEffect } from "react";
import { useProjectsContext } from "./ProjectContext";

const FilterContext = React.createContext();
export const FilterProvider = ({ children }) => {
  const { projects } = useProjectsContext();
  const [singleCategory, setSingleCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    setAllProjects([...projects]);
    setFilteredProjects([...projects]);
    const allCategories = [
      "All",
      ...new Set(allProjects.map((item) => item.category)),
    ];
    setCategories(allCategories);
  }, [projects]);

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
  }, [projects, singleCategory]);

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
