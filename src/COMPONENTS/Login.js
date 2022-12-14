import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

const Login = (props) => {
  // console.log(props.setUser);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
        };
        localStorage.setItem('user', JSON.stringify(newUser));

        props.setUser(newUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Content>
        <SlackImg src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" />
        <h1>Sign in Slack</h1>
        <SignInButton onClick={() => signIn()}>
          Sign In With Google
        </SignInButton>
      </Content>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: white;
  padding: 100px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 /24%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SlackImg = styled.img`
  height: 100px;
`;

const SignInButton = styled.button`
  margin-top: 50px;
  background-color: #0a8d48;
  color: white;
  border: none;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`;
