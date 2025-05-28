import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./router";
import { EmployeeProvider } from "./contexts/EmployeeContext";
import "./main.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <EmployeeProvider>
      <RouterProvider router={router} />
    </EmployeeProvider>
  </React.StrictMode>
);
