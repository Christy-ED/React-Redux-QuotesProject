/*
Action creators are functions that dispatch actions to the Redux store.

Steps:
1. Registering a User (loginUser)
This is an asynchronous action (a thunk).
Steps:
1-Dispatch Request Action:
Dispatch REGISTER_USER_REQUEST to update the state and indicate that the registration process has started (loading: true).

2-Send API Request:
Make a POST request to http://localhost:5000/REGISTER with the user credentials.

3-Handle Success:
If the API call succeeds, dispatch REGISTER_USER_SUCCESS with the response data as the payload.
 This updates the state to include the registered user details (user: response.data) and stops the loading (loading: false).

4-Handle Failure:
If the API call fails, dispatch REGISTER_USER_FAILURE with the error message. This updates the state with the error (error: error.message) and stops the loading. */




//action types
export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

//action creators
import axios from "axios";
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
} from "./example";

export const loginUser = (credentials) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_REQUEST });
  try {
    const response = await axios.post(
      "http://localhost:5000/REGISTER",
      credentials
    );
    dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: REGISTER_USER_FAILURE, payload: error.message });
  }
};

export const deleteUser = (credentials) => async (dispatch) => {
  dispatch({ type: DELETE_USER_REQUEST });
  try {
    const response = await axios.delete(
      "http://localhost:5000/DELETE",
      credentials
    );
    dispatch({ type: DELETE_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: DELETE_USER_FAILURE, payload: error.message });
  }
};

//reducers
const initialState = {
  loading: false, // indicates whether an API request is ongoing.
  user: {}, // holds the user details if registration is successful.
  error: null, // captures any error messages if an operation fails.
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { ...state, loading: true };
    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case REGISTER_USER_FAILURE:
      return { ...state, loading: false, user: {}, error: action.payload };
    case DELETE_USER_REQUEST:
      return { ...state, loading: true };
    case DELETE_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case DELETE_USER_FAILURE:
      return { ...state, loading: false, user: {}, error: action.payload };
    default:
      return state;
  }
};

//store
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./example";

const rootReducer = combineReducers({
  user: userReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

