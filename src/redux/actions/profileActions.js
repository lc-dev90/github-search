import axios from "axios";

import {
  PROFILE_LIST_REQUEST,
  PROFILE_LIST_SUCCESS,
  PROFILE_LIST_FAIL,
  CLEAN_PROFILE_LIST,
  PROFILE_DETAILS_REQUEST,
  PROFILE_DETAILS_SUCCESS,
  PROFILE_DETAILS_FAIL,
  GET_MORE_PROJECTS_FAIL,
  GET_MORE_PROJECTS_SUCCESS,
  GET_MORE_PROJECTS_REQUEST,
} from "../constants/profileConstants";

const api = "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";

export const getMoreProjectsFromProfile = (user, page) => async (dispatch) => {
  try {
    dispatch({
      type: GET_MORE_PROJECTS_REQUEST,
    });
    const options = {
      headers: {
        Authorization: api,
      },
    };
    const repos = await axios.get(
      `https://api.github.com/users/${user}/repos?per_page=12&page=${page}`,
      options
    );
    dispatch({
      type: GET_MORE_PROJECTS_SUCCESS,
      payload: repos.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MORE_PROJECTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProfileDetails =
  (user, page = 1) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PROFILE_DETAILS_REQUEST,
      });
      const profile = await axios.get(`https://api.github.com/users/${user}`);
      const starred = await axios.get(
        `https://api.github.com/users/${user}/starred`
      );
      const options = {
        headers: {
          Authorization: api,
        },
      };
      const repos = await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=12&page=${page}`,
        options
      );

      dispatch({
        type: PROFILE_DETAILS_SUCCESS,
        payload: {
          profile: profile.data,
          starred: starred.data,
          repos: repos.data,
        },
      });
    } catch (error) {
      dispatch({
        type: PROFILE_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const clearListProfiles = () => (dispatch) => {
  dispatch({
    type: CLEAN_PROFILE_LIST,
  });
};

export const listProfiles =
  (searchTerm, page = 1) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PROFILE_LIST_REQUEST,
      });

      let { data } = await axios.get(
        `https://api.github.com/search/users?q=${searchTerm}&per_page=10&page=${page}`
      );

      dispatch({
        type: PROFILE_LIST_SUCCESS,
        payload: {
          data: data.items,
          totalCount: data.total_count,
          previousSearchTerm: searchTerm,
        },
      });
    } catch (error) {
      dispatch({
        loading: false,
        type: PROFILE_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
