import { NavLink } from "react-router-dom";

import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  text-decoration: none;
  gap: 10px;
`;

const NavListItem = styled.li`
  text-transform: uppercase;
  font-size: 13px;
  a {
    color: #5d6069;
    text-decoration: none;

    &.active {
      font-weight: 500;
    }
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
