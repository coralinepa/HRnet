import { useContext } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";

function useEmployees() {
  return useContext(EmployeeContext);
}
export { useEmployees };

/*Ce fichier crée un hook personnalisé appelé useEmployees.
Il utilise useContext pour accéder au contexte EmployeeContext.
Ce hook permet aux composants d'accéder facilement aux données et fonctions du contexte sans devoir importer useContext à chaque fois. 
C’est un raccourci pratique pour accéder à la liste des employés et aux fonctions de gestion (ajout, suppression, modification).*/
