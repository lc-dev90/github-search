import { TOGGLE_THEME } from "../constants/themeConstants";

export const toggleDarkTheme = () => (dispatch, getState) => {
  dispatch({
    type: TOGGLE_THEME,
  });
  localStorage.setItem("theme", JSON.stringify(getState().darkMode.darkMode));
};
