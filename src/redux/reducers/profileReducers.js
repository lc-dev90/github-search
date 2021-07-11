import {
  PROFILE_LIST_REQUEST,
  PROFILE_LIST_SUCCESS,
  PROFILE_LIST_FAIL,
} from "../constants/profileConstants";

export const profileListReducer = (state = { profiles: [] }, action) => {
  switch (action.type) {
    case PROFILE_LIST_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PROFILE_LIST_SUCCESS:
      return {
        loading: false,
        profiles: action.payload,
      };
    case PROFILE_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
