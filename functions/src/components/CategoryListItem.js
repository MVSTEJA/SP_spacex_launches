"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CategoryListItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

const CategoryListItem = ({
  category = {}
}) => {
  let {
    launch_success = "",
    rocket: {
      first_stage: {
        cores
      }
    }
  } = category;
  let {
    land_success = ""
  } = cores[0];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card mb-5 w-xl-24 w-md-48 mr-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-header mt-3 nb-b mx-3"
  }, /*#__PURE__*/_react.default.createElement(_reactLazyLoadImageComponent.LazyLoadImage, {
    wrapperClassName: "mx-auto h-100 placeholder-image",
    src: category.links.mission_patch,
    alt: "Card cap",
    width: "100%",
    effect: "blur",
    placeholderSrc: require("../images/image-placeholder.png")
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body p-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-text font-weight-bold mb-2"
  }, category.mission_name, " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "pl-1"
  }, "#", category.flight_number)), category.mission_id.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "card-text"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "mb-0 font-weight-bold"
  }, "Mission Ids:"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "mb-2"
  }, category.mission_id.map(id => /*#__PURE__*/_react.default.createElement("li", {
    key: id
  }, id)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-text mb-2"
  }, /*#__PURE__*/_react.default.createElement("dl", {
    className: "row mb-0"
  }, /*#__PURE__*/_react.default.createElement("dt", {
    className: "col-8"
  }, "Launch Year: "), /*#__PURE__*/_react.default.createElement("dd", {
    className: "col-4"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "font-weight-light"
  }, category.launch_year)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-text mb-2"
  }, /*#__PURE__*/_react.default.createElement("dl", {
    className: "row mb-0"
  }, /*#__PURE__*/_react.default.createElement("dt", {
    className: "col-8"
  }, "Successful Launch: "), /*#__PURE__*/_react.default.createElement("dd", {
    className: "col-4"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "font-weight-light"
  }, launch_success && launch_success.toString())))), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-text mb-2"
  }, /*#__PURE__*/_react.default.createElement("dl", {
    className: "row mb-0"
  }, /*#__PURE__*/_react.default.createElement("dt", {
    className: "col-8"
  }, "Successful Landing: "), /*#__PURE__*/_react.default.createElement("dd", {
    className: "col-4"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "font-weight-light"
  }, land_success && land_success.toString()))))));
};

exports.CategoryListItem = CategoryListItem;
var _default = CategoryListItem;
exports.default = _default;