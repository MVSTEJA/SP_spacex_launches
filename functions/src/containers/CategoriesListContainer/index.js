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
  const categoriesList = (0, _reactRedux.useSelector)(state => state.categoriesList.categories);
  const dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(() => {
    dispatch((0, _categories.getAllCategories)());
  }, [dispatch]);
  return /*#__PURE__*/_react.default.createElement(_CategoriesList.default, {
    categoriesList: categoriesList
  });
};

var _default = CategoriesListContainer;
exports.default = _default;