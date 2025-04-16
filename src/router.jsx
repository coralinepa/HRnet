import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home, EmployeeList } from "./pages";

function getEmployees() {
  const data = localStorage.getItem("employees");
  return JSON.parse(data) || [];
}

export async function saveEmployee({ request }) {
  try {
    const data = await request.json();

    const previous = JSON.parse(localStorage.getItem("employees")) || [];
    const next = [...previous, data];

    localStorage.setItem("employees", JSON.stringify(next));

    return {
      success: true,
      message: "Employé ajouté avec succès.",
      employee: data,
    };
  } catch (error) {
    console.error("Erreur dans saveEmployee:", error);

    return {
      success: false,
      message: "Une erreur est survenue lors de l'ajout de l'employé.",
      error: error.message,
    };
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true,
        action: saveEmployee,
      },
      {
        path: "/current-employees",
        element: <EmployeeList />,
        loader: getEmployees,
      },
    ],
  },
]);

export default router;
