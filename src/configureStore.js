import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "./reducers";
import thunk from "redux-thunk";

const middleware = [thunk];

let history;

//SSR createBrowserHistory mod.
if (typeof document !== "undefined") {
  history = require("history").createBrowserHistory();
}

// export const history = createBrowserHistory()

/**
 * Logs all actions and states after they are dispatched.
 */
const reduxLogger = (store) => (next) => (action) => {
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
const crashReporter = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error("Caught an exception! while redux dispatched action", err);
  }
};

const windowObj = typeof window !== "undefined" && window;

export default function configureStore(initialState = {}) {

  const composeEnhancer =
    windowObj.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  if (process.env.NODE_ENV !== "production") {
    middleware.push(
      ...[
        crashReporter,
        reduxLogger,
        require("redux-immutable-state-invariant").default(),
      ]
    );
  }
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancer(applyMiddleware(...middleware))
  );
  return store;
}
