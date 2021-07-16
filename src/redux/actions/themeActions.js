import { TOGGLE_THEME } from "../constants/themeConstants";

export const toggleDarkTheme = () => (dispatch) => {
  dispatch({
    type: TOGGLE_THEME,
  });
};
