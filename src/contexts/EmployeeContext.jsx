import { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";

const EmployeeContext = createContext();

const initialState = JSON.parse(localStorage.getItem("employees")) || [];
/*Initialise la liste d’employés à partir du localStorage, ou un tableau vide si rien n'est trouvé.*/
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

/*Gère 3 types d’actions :
"ADD_EMPLOYEE" : ajoute un nouvel employé.
"DELETE_EMPLOYEE" : supprime un employé selon son index.
"EDIT_EMPLOYEE" : modifie un employé donné par son index.*/

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

/*Utilise useReducer pour créer employees et dispatch.
Met à jour le localStorage à chaque fois que employees change (useEffect).
Définit des fonctions (add, delete, edit) qui envoient les bonnes actions au reducer.
Expose ces données via <EmployeeContext.Provider>.*/

export { EmployeeContext };

/*Centralisation de l’état.
Persistance via localStorage.
Réutilisabilité grâce au hook useEmployees.
Simplicité d’usage dans tous les composants.*/
