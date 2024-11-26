//store
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./example";

const rootReducer = combineReducers({
  data: datarReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
