//store
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import { thunk } from "redux-thunk";
import { dataReducer } from "../reducers/reducers";


const rootReducer = combineReducers({
  data: dataReducer,
  
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
