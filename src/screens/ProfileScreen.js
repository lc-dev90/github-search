import React from "react";
import styled from "styled-components";

//Components
import Header from "../components/Header";

const ProfileScreen = () => {
  return (
    <>
      <Header />
      <Main>Hello from profile page</Main>
    </>
  );
};

export default ProfileScreen;

const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto;
`;
