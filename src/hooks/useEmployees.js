import { useContext } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";

function useEmployees() {
  return useContext(EmployeeContext);
}
export { useEmployees };
