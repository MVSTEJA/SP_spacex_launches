"use strict";

var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireWildcard3(require("react"));

var _reactRedux = require("react-redux");

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

var _reactToastify = require("react-toastify");

var _categories = require("./actions/categories");

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
  const {
    response,
    message
  } = (0, _reactRedux.useSelector)(state => state.categoriesList.categoriesError) || {};
  console.log(response, message);
  let dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(() => {
    if (message) {
      _reactToastify.toast.error(message);

      dispatch((0, _categories.errorGetCategories)());
    }
  }, [message, dispatch]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "jumbotron"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-2 high-res-desktop mx-auto"
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "position-sticky app-nav-bar"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "SpaceX Launch Programs")), /*#__PURE__*/_react.default.createElement("main", {
    className: "row mx-0"
  }, /*#__PURE__*/_react.default.createElement(AsyncCategoryTypeSideBar, null), /*#__PURE__*/_react.default.createElement(AsyncCategoriesList, null)), /*#__PURE__*/_react.default.createElement("footer", {
    className: "d-flex justify-content-center mt-5"
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Developed by", /*#__PURE__*/_react.default.createElement("span", {
    className: "font-weight-light align-self-baseline"
  }, ": MVS Teja"))), /*#__PURE__*/_react.default.createElement(_reactToastify.ToastContainer, null)));
};

var _default = App;
exports.default = _default;