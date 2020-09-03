"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

var _reactRedux = require("react-redux");

var _assetManifest = _interopRequireDefault(require("../../build/asset-manifest.json"));

var _App = _interopRequireDefault(require("./../src/App"));

// read the manifest file
// import our main App component
// function to map chunk names to assets
const extractAssets = (assets, chunks) => Object.keys(assets).filter(asset => chunks.indexOf(asset.replace(".js", "")) > -1).map(k => assets[k]);

const path = require("path");

const fs = require("fs");

var _default = store => (req, res, next) => {
  // get the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, "..", "..", "build", "index.html");
  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("err", err);
      return res.status(404).end();
    }

    const modules = [];
    const reduxState = JSON.stringify(store.getState()); // render the app as a string

    const html = _server.default.renderToString( /*#__PURE__*/_react.default.createElement(_reactLoadable.default.Capture, {
      report: m => modules.push(m)
    }, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react.default.createElement(_App.default, null))));

    const extraChunks = extractAssets(_assetManifest.default, modules).map(c => `<script type="text/javascript" src="/${c}"></script>`); // now inject the rendered app into our html and send it

    return res.send(htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`).replace("</body>", extraChunks.join("") + "</body>").replace('"__SERVER_REDUX_STATE__"', reduxState));
  });
};

exports.default = _default;