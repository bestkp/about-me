import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import Immutable from "immutable";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";

const initialState = Immutable.Map();
const composeEnhancers = composeWithDevTools({});
export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(
      reduxThunk,
      // logger
    )
  )
);
