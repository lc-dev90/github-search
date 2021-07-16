import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import reducers
import {
  profileListReducer,
  profileDetailsReducer,
} from "./reducers/profileReducers";
import { themeReducer } from "./reducers/themeReducers";
import { projectDetailsReducer } from "./reducers/projectReducers";

const reducer = combineReducers({
  profileList: profileListReducer,
  profileDetails: profileDetailsReducer,
  projectDetails: projectDetailsReducer,
  darkMode: themeReducer,
});

const darkModeFromStorage = localStorage.getItem("theme")
  ? JSON.parse(localStorage.getItem("theme"))
  : {};

const initialState = {
  darkMode: { darkMode: darkModeFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
