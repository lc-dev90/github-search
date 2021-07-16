import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Switch from "@material-ui/core/Switch";
import { Moon } from "@styled-icons/boxicons-solid/Moon";
import { Sun } from "@styled-icons/boxicons-solid/Sun";
import styled from "styled-components";

import { toggleDarkTheme } from "../redux/actions/themeActions";

const TogglerDarkTheme = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.darkMode);

  const toggleChecked = () => {
    dispatch(toggleDarkTheme());
  };
  return (
    <Toggle light={darkMode}>
      <div>
        <i>
          <SunIcon light={darkMode} />
        </i>
      </div>
      <div>
        <Switch size="small" onChange={toggleChecked} color="primary" />
      </div>

      <div>
        <i>
          <MoonIcon light={darkMode} />
        </i>
      </div>
    </Toggle>
  );
};

export default TogglerDarkTheme;

const Toggle = styled.div`
  background: ${(props) =>
    props.light ? "rgb(10 10 10 / 13%)" : "rgb(10 10 10 / 50%)"};
  padding: 0.15rem 0.3rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  div {
    i {
    }
  }
`;

const SunIcon = styled(Sun)`
  color: ${(props) => (props.light ? "white" : "black")};
  width: 20px;
`;
const MoonIcon = styled(Moon)`
  width: 15px;
  margin-bottom: 2px;
  color: ${(props) => (props.light ? "black" : "rebeccapurple")};
`;
