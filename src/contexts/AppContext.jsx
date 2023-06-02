import React, { useEffect, useState, useContext, useReducer } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [isPageActive, setIsPageActive] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isActive,
        setIsActive,
        isPageActive,
        setIsPageActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useAppContext = () => {
  return useContext(AppContext);
};
