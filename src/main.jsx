import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";

import { AppProvider } from "./contexts/AppContext";
import { FormProvider } from "./contexts/FormContext";
import { ProjectsProvider } from "./contexts/ProjectContext";
import { FilterProvider } from "./contexts/FilterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <ProjectsProvider>
        <FilterProvider>
          <FormProvider>
            <App />
          </FormProvider>
        </FilterProvider>
      </ProjectsProvider>
    </AppProvider>
  </React.StrictMode>
);
