import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Loadable from "react-loadable";

import 'lazysizes';
import 'react-toastify/dist/ReactToastify.css';
import "./index.scss";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./configureStore";

const windowObj = typeof window !== "undefined" && window;
const reduxStateFromServer =
  windowObj.REDUX_STATE === "__SERVER_REDUX_STATE__"
    ? null
    : windowObj.REDUX_STATE;

const store = configureStore(reduxStateFromServer || {});

window.onload = () => {
  Loadable.preloadReady().then(() => {
    const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate
    
    renderMethod(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById("root")
    );
  });
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
