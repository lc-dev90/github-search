import {
  PROFILE_LIST_REQUEST,
  PROFILE_LIST_SUCCESS,
  PROFILE_LIST_FAIL,
  CLEAN_PROFILE_LIST,
} from "../constants/profileConstants";

export const profileListReducer = (
  state = { profiles: [], totalCount: 0 },
  action
) => {
  switch (action.type) {
    case CLEAN_PROFILE_LIST:
      return {
        profiles: [],
        totalCount: 0,
        ...state,
      };
    case PROFILE_LIST_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PROFILE_LIST_SUCCESS:
      return {
        loading: false,
        profiles: action.payload.data,
        totalCount: action.payload.totalCount,
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
