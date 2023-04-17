import axios from "axios";
import React, { useContext, useState } from "react";

const FetchContext = React.createContext();

export const FetchProvider = ({ children }) => {
  const [data, setData] = useState({
    FetchLoading: false,
    FetchError: false,
    projects: [],
    testimonials: [],
  });

  const fetchTable = async (url,name) => {
    try {
      setData((prev) => {
        return { ...prev, FetchLoading: true };
      });
      const response = await axios.get(url);
      const result = response.data;
      setData((prev) => {
        return { ...prev, [name]: result, FetchLoading: false };
      });
    } catch (error) {
      setData((prev) => {
        return { ...prev, FetchError: true, FetchLoading: false };
      });
    }
  };

  return (
    <FetchContext.Provider value={{ ...data, fetchTable }}>
      {children}
    </FetchContext.Provider>
  );
};
// make sure use
export const useFetchContext = () => {
  return useContext(FetchContext);
};
