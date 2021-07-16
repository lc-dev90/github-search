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
        <Switch
          checked={!lightMode}
          size="small"
          onChange={toggleChecked}
          color="primary"
        />
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
