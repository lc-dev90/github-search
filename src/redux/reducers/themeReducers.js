import { SET_DARK_MODE, SET_LIGHT_MODE } from "../constants/themeConstants";

export const themeReducer = (state: { dark_mode: true }, action) => {
  switch (action.type) {
    case SET_DARK_MODE:
      return {
        dark_mode: true,
      };
    case SET_LIGHT_MODE:
      return {
        dark_mode: false,
      };
    default:
      return state;
  }
};
