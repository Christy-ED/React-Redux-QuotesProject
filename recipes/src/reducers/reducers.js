import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,

  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,

  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE
} from "../actions/actions.js";

const initialState = {
  loading: false,
  recipes: [],
  user: {},
  error: null,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, recipes: action.payload, error: null };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, recipes: [], error: action.payload };


    case REGISTER_USER_REQUEST:
      return { ...state, loading: true };
    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case REGISTER_USER_FAILURE:
    return { ...state, loading: false, user: {}, error: action.payload };

    case LOGIN_USER_REQUEST:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case LOGIN_USER_FAILURE:
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
export default dataReducer;
