"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require("redux");

var _reducers = _interopRequireDefault(require("./reducers"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

const middleware = [_reduxThunk.default];
let history; //SSR createBrowserHistory mod.

if (typeof document !== "undefined") {
  history = require("history").createBrowserHistory();
} // export const history = createBrowserHistory()

/**
 * Logs all actions and states after they are dispatched.
 */


const reduxLogger = store => next => action => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};
/**
 * Sends crash reports as state is updated and listeners are notified.
 */


const crashReporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error("Caught an exception! while redux dispatched action", err);
  }
};

const windowObj = typeof window !== "undefined" && window;

function configureStore(initialState = {}) {
  const composeEnhancer = windowObj.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

  if (process.env.NODE_ENV !== "production") {
    middleware.push(...[crashReporter, reduxLogger, require("redux-immutable-state-invariant").default()]);
  }

  const store = (0, _redux.createStore)((0, _reducers.default)(history), initialState, composeEnhancer((0, _redux.applyMiddleware)(...middleware)));
  return store;
}