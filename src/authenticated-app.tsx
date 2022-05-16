import React from "react";
import styled from "@emotion/styled";
import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "./screens/project-list";
import { Row } from "components/lib";
export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header between={true}>
      <HeaderLeft gap={true}>
          <h2>logo</h2>
          <h2>项目</h2>
          <h2>用户</h2>
      </HeaderLeft>
      <HeaderRight>
      <button onClick={logout}>登出</button>
      </HeaderRight>
        
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  ); 
};

const Container = styled.div`
    display: grid;
    grid-template-rows:6rem 1fr;
    height: 100vh;
    grid-template-areas:
    'header'
    'main' 
   ;

`
const Header = styled(Row)` 
    justify-content:space-between;
`
const HeaderLeft = styled(Row)`` 
const HeaderRight = styled.div``;
const Main = styled.main`grid-area:main;` 
const HeaderItem = styled.h3`

`