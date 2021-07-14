import {
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_DETAILS_FAIL,
} from "../constants/projectConstants";

export const projectDetailsReducer = (
  state = { loading: true, project: [] },
  action
) => {
  switch (action.type) {
    case PROJECT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PROJECT_DETAILS_SUCCESS:
      return {
        loading: false,
        project: action.payload,
      };
    case PROJECT_DETAILS_FAIL:
      return {
        loading: false,
        project: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
