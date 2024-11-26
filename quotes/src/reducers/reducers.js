import {FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE} from './actions/actions.js';

const initialState = {
  loading: false,
  user: {},
  error: null, 
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, user: {}, error: action.payload };
    default:
         return state;
  }
};
