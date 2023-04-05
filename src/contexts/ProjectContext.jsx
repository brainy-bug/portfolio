import axios from "axios";
import React, { useContext, useEffect,useState } from "react";
import { toast } from "react-toastify";

import { projects_url as url } from "../utils/constants";

const ProjectsContext = React.createContext();

export const ProjectsProvider = ({ children }) => {
  const [data, setData] = useState({
    projectsLoading: false,
    projectsError: false,
    projects: [],
  });

  const fetchProjects = async (url) => {
    try {
      setData((prev) => {
        return { ...prev, projectsLoading: true };
      });
      const response = await axios.get(url);
      const projects = response.data;
      setData((prev) => {
        return { ...prev, projects, projectsLoading: false };
      });
    } catch (error) {
      setData((prev) => {
        return { ...prev, projectsError:true, projectsLoading: false };
      });
    }
  };

  useEffect(() => {
    fetchProjects(url);
  }, []);

  return (
    <ProjectsContext.Provider value={{ ...data }}>
      {children}
    </ProjectsContext.Provider>
  );
};
// make sure use
export const useProjectsContext = () => {
  return useContext(ProjectsContext);
};
