import axios from "axios";

import {
  PROJECT_DETAILS_FAIL,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_DETAILS_REQUEST,
} from "../constants/projectConstants";

export const getProjectDetails = (user, project) => async (dispatch) => {
  try {
    dispatch({
      PROJECT_DETAILS_REQUEST,
    });
    const projectDetails = axios.get(
      `https://api.github.com/repos/${user}/${project}`
    );
    dispatch({
      PROJECT_DETAILS_SUCCESS,
      payload: projectDetails.data,
    });
  } catch (error) {
    dispatch({
      PROJECT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
