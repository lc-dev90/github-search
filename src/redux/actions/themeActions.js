import { SET_DARK_MODE, SET_LIGHT_MODE } from "../constants/themeConstants";

export const setDarkMode = () => (dispatch) => {
  dispatch({
    SET_DARK_MODE,
  });
};

export const setLightMode = () => (dispatch) => {
  dispatch({
    SET_LIGHT_MODE,
  });
};
