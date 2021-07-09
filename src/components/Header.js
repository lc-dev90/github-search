import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Components
import Logo from "../assets/logo-horizontal.svg";

import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";

const Header = ({ match }) => {
  return (
    <HeaderContainer>
      <Link to="/">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
      </Link>

      <Link to="/">
        <div>
          <ArrowBackIcon />
        </div>
      </Link>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
  padding: 42px 0;
  justify-content: space-between;
  align-items: center;
  div {
  }
`;

const ArrowBackIcon = styled(ArrowBack)`
  width: 42px;
  color: #b2b2b2;
  cursor: pointer;
  &:hover {
    color: #535353;
  }
`;
