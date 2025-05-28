import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home, EmployeeList } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/current-employees",
        element: <EmployeeList />,
      },
    ],
  },
]);

export default router;
