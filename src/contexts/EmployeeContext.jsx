import { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";

const EmployeeContext = createContext();

const initialState = JSON.parse(localStorage.getItem("employees")) || [];

function employeeReducer(state, action) {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return [...state, action.payload];

    case "DELETE_EMPLOYEE":
      return state.filter((_, index) => index !== action.payload);

    case "EDIT_EMPLOYEE":
      return state.map((emp, index) =>
        index === action.payload.index
          ? { ...emp, ...action.payload.data }
          : emp
      );

    default:
      return state;
  }
}

export function EmployeeProvider({ children }) {
  const [employees, dispatch] = useReducer(employeeReducer, initialState);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) =>
    dispatch({ type: "ADD_EMPLOYEE", payload: employee });

  const deleteEmployee = (index) =>
    dispatch({ type: "DELETE_EMPLOYEE", payload: index });

  const editEmployee = (index, data) =>
    dispatch({ type: "EDIT_EMPLOYEE", payload: { index, data } });

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, deleteEmployee, editEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

EmployeeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { EmployeeContext };
