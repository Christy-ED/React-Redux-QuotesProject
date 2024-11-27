import axios from "axios";

//action types
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const fetchData = () => async (dispatch) => {
  dispatch({ type: FETCH_DATA_REQUEST });
  try {
    const response = await axios.get("https://dummyjson.com/recipes");
    const recipes = response.data.recipes;
    dispatch({ type: FETCH_DATA_SUCCESS, payload: recipes });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
  }
};

// export const loginUser = (credentials) => async (dispatch) => {
//   dispatch({ type: LOGIN_USER_REQUEST });
//   try {
//     const response = await axios.post(
//       "https://dummyjson.com/auth/login",
//       credentials
//     );
//     dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
//   } catch (error) {
//     dispatch({ type: "LOGIN_FAILURE", payload: error.message });
//   }
// };

// export const registerUser = (userData) => async (dispatch) => {
//   try {
//     const response = await axios.post(
//       "https://dummyjson.com/auth/delete",
//       userData
//     );
//     dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
//   } catch (error) {
//     dispatch({ type: "REGISTER_FAILURE", payload: error.message });
//   }
// };

// export const deleteUser = (userData) => async (dispatch) => {
//   try {
//     const response = await axios.post(
//       "https://dummyjson.com/auth/register",
//       userData
//     );
//     dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
//   } catch (error) {
//     dispatch({ type: "REGISTER_FAILURE", payload: error.message });
//   }
// };
