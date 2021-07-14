import React from "react";
import styled from "styled-components";

// components

import Header from "../components/Header";
import Footer from "../components/Footer";

const ProjectDetailsScreen = (props) => {
  console.log(props);
  return (
    <>
      <Header />
      <Main>Hello from project details screen</Main>
      <Footer />
    </>
  );
};

export default ProjectDetailsScreen;

const Main = styled.main`
  max-width: 900px;
  margin: 0 auto;
  color: #b2b2b2;
  min-height: calc(100vh - 246px);
`;
