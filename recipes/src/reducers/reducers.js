import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../actions/actions.js";

const initialState = {
  loading: false,
  recipes: {},
  error: null,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, recipes: action.payload, error: null };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, recipes: {}, error: action.payload };
    default:
      return state;
  }
};
export default dataReducer;
