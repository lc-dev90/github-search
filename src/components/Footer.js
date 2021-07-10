import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <FooterContainer>Hello from footer &copy; </FooterContainer>;
};

export default Footer;

const FooterContainer = styled.footer`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background: #201f1f;
  color: white;
`;
