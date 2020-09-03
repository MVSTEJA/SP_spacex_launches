"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrapp = void 0;

var _express = _interopRequireDefault(require("express"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

var _renderer = _interopRequireDefault(require("./middleware/renderer"));

var _configureStore = _interopRequireDefault(require("./src/configureStore"));

const functions = require("firebase-functions"); // const PORT = 3001;


const path = require("path"); // initialize the application and create the routes


const app = (0, _express.default)();

const router = _express.default.Router();

const actionIndex = (req, res, next) => {
  const store = (0, _configureStore.default)();
  (0, _renderer.default)(store)(req, res, next);
}; // root (/) should always serve our server rendered page


router.use("^/$", actionIndex); // other static resources should just be served as they are

router.use(_express.default.static(path.resolve(__dirname, "..", "build"), {
  maxAge: "30d"
}));
app.use(router);
let ssrapp; // start the app

exports.ssrapp = ssrapp;

_reactLoadable.default.preloadAll().then(() => {
  exports.ssrapp = ssrapp = functions.https.onRequest(app);
});