import { TOGGLE_THEME } from "../constants/themeConstants";

export const themeReducer = (state = { darkMode: false }, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        darkMode: !state.darkMode,
      };

    default:
      return state;
  }
};
