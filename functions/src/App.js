"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireDefault(require("react"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

const AsyncCategoryTypeSideBar = (0, _reactLoadable.default)({
  loader: () => Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require("./components/CategoryTypeSideBar"))),
  modules: ["./components/CategoryTypeSideBar"],
  webpack: () => [require.resolveWeak("./components/CategoryTypeSideBar")],
  loading: () => /*#__PURE__*/_react.default.createElement("div", null, "loading..."),
  modules: ["myNamedChunk2"]
});
const AsyncCategoriesList = (0, _reactLoadable.default)({
  loader: () => Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require("./containers/CategoriesListContainer"))),
  modules: ["./containers/CategoriesListContainer"],
  webpack: () => [require.resolveWeak("./containers/CategoriesListContainer")],
  loading: () => /*#__PURE__*/_react.default.createElement("div", null, "loading..."),
  modules: ["myNamedChunk1"]
});

const App = () => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "jumbotron pt-2 px-4"
  }, /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("h1", null, "SpaceX Launch Programs")), /*#__PURE__*/_react.default.createElement("main", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement(AsyncCategoryTypeSideBar, null), /*#__PURE__*/_react.default.createElement(AsyncCategoriesList, null)), /*#__PURE__*/_react.default.createElement("footer", {
    className: "d-flex justify-content-center mt-5"
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Developed by", /*#__PURE__*/_react.default.createElement("span", {
    className: "font-weight-light align-self-baseline"
  }, ": MVS Teja")))));
};

var _default = App;
exports.default = _default;