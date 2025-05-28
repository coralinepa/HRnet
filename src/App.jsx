import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { Header } from "./components/organisms";

const Main = styled.main`
  background-color: #eaecec;
  height: 100%;
`;

function App() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default App;
