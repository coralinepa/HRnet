import { NavLink } from "react-router-dom";

import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  gap: 10px;
`;

const NavListItem = styled.li`
  color: #5d6069;
  text-transform: uppercase;
  text-decoration: none;
  & a.active {
    color: #5d6069;
    font-weight: 300;
  }
`;

function Navbar() {
  return (
    <NavList>
      <NavListItem>
        <NavLink to="/">Accueil</NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink to="/current-employees">View Current Employees</NavLink>
      </NavListItem>
    </NavList>
  );
}

export default Navbar;
