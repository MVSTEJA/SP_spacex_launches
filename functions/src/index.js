"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRedux = require("react-redux");

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

require("lazysizes");

require("react-toastify/dist/ReactToastify.css");

require("./index.scss");

var _App = _interopRequireDefault(require("./App"));

var serviceWorker = _interopRequireWildcard(require("./serviceWorker"));

var _configureStore = _interopRequireDefault(require("./configureStore"));

const windowObj = typeof window !== "undefined" && window;
const reduxStateFromServer = windowObj.REDUX_STATE === "__SERVER_REDUX_STATE__" ? null : windowObj.REDUX_STATE;
const store = (0, _configureStore.default)(reduxStateFromServer || {});

window.onload = () => {
  _reactLoadable.default.preloadReady().then(() => {
    const renderMethod = !!module.hot ? _reactDom.default.render : _reactDom.default.hydrate;
    renderMethod( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react.default.createElement(_App.default, null))), document.getElementById("root"));
  });
}; // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.register();