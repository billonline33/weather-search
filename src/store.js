import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//import createHistory from "history/createBrowserHistory";
import { createBrowserHistory } from "history";
import rootReducer from "./reducers";

const initialState = {};
const enhancers = [];
const middleware = [thunk];

export const history = createBrowserHistory();

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composeEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(rootReducer, initialState, composeEnhancers);

export default store;
