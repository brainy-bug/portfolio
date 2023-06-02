import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";

import { AppProvider } from "./contexts/AppContext";
import { FormProvider } from "./contexts/FormContext";
import { FilterProvider } from "./contexts/FilterContext";
import { FetchProvider } from "./contexts/FetchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <FetchProvider>
        <FilterProvider>
          <FormProvider>
            <App />
          </FormProvider>
        </FilterProvider>
      </FetchProvider>
    </AppProvider>
  </React.StrictMode>
);
