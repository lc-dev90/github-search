import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import { Moon } from "@styled-icons/boxicons-solid/Moon";
import { Sun } from "@styled-icons/boxicons-solid/Sun";
import styled from "styled-components";

const TogglerDarkTheme = () => {
  const [lightMode, setLightMode] = useState(false);

  const toggleChecked = () => {
    setLightMode((prev) => !prev);
    console.log("Darkmode: ", lightMode);
  };
  return (
    <Toggle>
      <div>
        <i>
          <SunIcon light={lightMode} />
        </i>
      </div>
      <div>
        <Switch checked={!lightMode} onChange={toggleChecked} color="primary" />
      </div>

      <div>
        <i>
          <MoonIcon light={lightMode} />
        </i>
      </div>
    </Toggle>
  );
};

export default TogglerDarkTheme;

const Toggle = styled.div`
  background: rgb(10 10 10 / 50%);
  padding: 0.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  div {
    i {
    }
  }
`;

const SunIcon = styled(Sun)`
  color: ${(props) => (props.light ? "white" : "black")};
  width: 25px;
`;
const MoonIcon = styled(Moon)`
  width: 20px;
  margin-bottom: 2px;
  color: ${(props) => (props.light ? "black" : "rebeccapurple")};
`;
