import React, { useState } from "react";
import { RegisterScreen } from "../unauthenticated-app/register";
import { LoginScreen } from "../unauthenticated-app/login";
import { Card, Divider, Typography } from "antd";
import styled from "@emotion/styled";
//@ts-ignore
import logo from "../assets/logo.svg";
//@ts-ignore
import left from "../assets/left.svg";
//@ts-ignore
import right from "../assets/right.svg";
import { Button } from "antd";
export const UnauthenticatedApp = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [error,setError] = useState<Error|null>(null)
  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        <Title>
          {isRegistered?'请注册':'请登陆'}
          {error?<Typography.Text type={'danger'}>{error.message}</Typography.Text>:null}
        </Title>
        {isRegistered ? <RegisterScreen /> : <LoginScreen />}
        <Divider />
        <Button type={'link'} onClick={() => setIsRegistered(!isRegistered)}>
          {isRegistered ? "已经有账号了？直接登录" : "没有账号？注册新账号"}
        </Button>
      </ShadowCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;
const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`; 
const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94,108,132);
`
export const LongButton = styled(Button)`
  width: 100%;
`