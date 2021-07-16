import React from "react";
import styled from "styled-components";
import { Twitter } from "@styled-icons/bootstrap/Twitter";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
import { Facebook } from "@styled-icons/bootstrap/Facebook";
import { useSelector } from "react-redux";

const Footer = () => {
  const { darkMode } = useSelector((state) => state.darkMode);
  return (
    <FooterContainer darkMode={darkMode}>
      <span>
        Made with love and React Js by
        <br />
        <a
          href="https://www.github.com/lc-dev90"
          target="_blank"
          rel="noreferrer"
        >
          Luiz C. &copy;
        </a>
      </span>
      <div>
        <a
          href="https://www.facebook.com/profile.php?id=100069409744733"
          target="_blank"
          rel="noreferrer"
        >
          <i>
            <FacebookIcon />
          </i>
        </a>
        <a
          href="https://twitter.com/luizCLopes90"
          target="_blank"
          rel="noreferrer"
        >
          <i>
            <TwitterIcon />
          </i>
        </a>
        <a
          href="https://www.linkedin.com/in/luiz-cl%C3%A1udio-lopes-271226213/"
          target="_blank"
          rel="noreferrer"
        >
          <i>
            <LinkedinIcon />
          </i>
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
  padding: 30px;
  background: ${(props) => (props.darkMode ? "#8c8495" : "#151515")};
  color: ${(props) => (props.darkMode ? "#ffffff" : "white")};

  span {
    font-size: 12px;

    a {
      font-size: 1rem;
      display: inline-block;
      margin-top: 10px;
      &:hover {
        color: #8752cc;
      }
    }
  }
  div {
    margin-top: 20px;
    display: flex;
    a {
      margin-left: 20px;
      &:nth-of-type(1) {
        margin-left: 0;
      }
    }
  }
`;

const FacebookIcon = styled(Facebook)`
  width: 25px;
  &:hover {
    color: #8752cc;
  }
`;
const TwitterIcon = styled(Twitter)`
  width: 25px;
  &:hover {
    color: #8752cc;
  }
`;
const LinkedinIcon = styled(Linkedin)`
  width: 25px;
  &:hover {
    color: #8752cc;
  }
`;
