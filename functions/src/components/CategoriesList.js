"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CategoriesList = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _CategoryListItem = _interopRequireDefault(require("./CategoryListItem"));

var _categories = require("../actions/categories");

var _constants = require("../constants");

const CategoriesList = ({
  categoriesList = []
}) => {
  let dispatch = (0, _reactRedux.useDispatch)();
  const isLoadMoreVisible = (0, _reactRedux.useSelector)(state => state.categoriesList.isLoadMoreVisible);

  const handleLoadMore = () => {
    dispatch((0, _categories.loadMoreCategories)(_constants.DEFAULT_OFFSET));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "list-section list-section-lg list-section-md list-section-sm d-flex flex-column pt-md-0 px-0",
    id: "list-section"
  }, categoriesList && categoriesList.length > 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "container mx-md-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row row-cols-1 row-cols-md-2 row-cols-lg-4"
  }, categoriesList.map(category => /*#__PURE__*/_react.default.createElement(_CategoryListItem.default, {
    category: category,
    key: category.mission_name
  })))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "h5 h-100 d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("p", null, "No items to show.")), isLoadMoreVisible && categoriesList.length > 0 && /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-info mx-auto text-dark-100",
    onClick: handleLoadMore
  }, "Load more"));
};

exports.CategoriesList = CategoriesList;
var _default = CategoriesList;
exports.default = _default;