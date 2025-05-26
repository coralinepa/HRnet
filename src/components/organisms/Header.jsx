import styled from "styled-components";
import { Link } from "react-router-dom";

import Navbar from "./NavBar";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: #eaecec;
  border-bottom: 1px solid #bfc5c5;
`;

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 20px;
  border-right: 1px solid #bfc5c5;
`;

const Title = styled.h1`
  font-size: 15px;
  color: #6b8e23;
`;

function Header() {
  return (
    <StyledHeader>
      <Root>
        <Link to="/">
          <img src="./src/assets/logo.png" alt="Hrnet Logo" width="60px" />
        </Link>
        <Title>HRnet</Title>
      </Root>
      <Navbar />
    </StyledHeader>
  );
}

export default Header;
