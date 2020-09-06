"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _CategoriesList = _interopRequireDefault(require("../../components/CategoriesList"));

var _categories = require("../../actions/categories");

const CategoriesListContainer = () => {
  const {
    categories: categoriesList,
    isCategoriesLoading
  } = (0, _reactRedux.useSelector)(state => state.categoriesList);
  const dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(() => {
    dispatch((0, _categories.getAllCategories)());
  }, [dispatch]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isCategoriesLoading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex align-items-center list-section list-section-lg list-section-md list-section-sm justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "spinner-border",
    role: "status"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "Loading..."))) : /*#__PURE__*/_react.default.createElement(_CategoriesList.default, {
    categoriesList: categoriesList
  }));
};

var _default = CategoriesListContainer;
exports.default = _default;