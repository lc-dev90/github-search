import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

// Components
import Logo from "../assets/logo-horizontal.svg";

import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";

const Header = (props) => {
  let history = useHistory();
  return (
    <HeaderContainer>
      <Link to="/">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
      </Link>
      <div onClick={history.goBack}>
        <ArrowBackIcon />
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  max-width: 900px;
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
