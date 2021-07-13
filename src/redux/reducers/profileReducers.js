import {
  PROFILE_LIST_REQUEST,
  PROFILE_LIST_SUCCESS,
  PROFILE_LIST_FAIL,
  CLEAN_PROFILE_LIST,
  PROFILE_DETAILS_FAIL,
  PROFILE_DETAILS_SUCCESS,
  PROFILE_DETAILS_REQUEST,
  CLEAN_PROFILE_DETAILS,
} from "../constants/profileConstants";

export const profileDetailsReducer = (
  state = { profile: {}, starred: [], repos: [], loading: true },
  action
) => {
  switch (action.type) {
    case CLEAN_PROFILE_DETAILS:
      return {
        loading: true,
        profile: {},
        starred: [],
        repos: [],
      };
    case PROFILE_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PROFILE_DETAILS_SUCCESS:
      return {
        loading: false,
        profile: action.payload.profile,
        starred: action.payload.starred,
        repos: action.payload.repos,
      };
    case PROFILE_DETAILS_FAIL:
      return {
        loading: false,
        profile: {},
        starred: [],
        repos: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const profileListReducer = (
  state = { profiles: [], totalCount: 0, loading: true },
  action
) => {
  switch (action.type) {
    case CLEAN_PROFILE_LIST:
      return {
        profiles: [],
        totalCount: 0,
        loading: true,
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
        profiles: {},
      };
    default:
      return state;
  }
};
