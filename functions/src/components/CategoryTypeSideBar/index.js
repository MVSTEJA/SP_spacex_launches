"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _categories = require("../../actions/categories");

var _utils = require("../../utils");

var _constants = require("../../constants");

function CategoryTypeSideBar() {
  let dispatch = (0, _reactRedux.useDispatch)();
  let [currentActiveCategory, setCurrentActiveCategory] = (0, _react.useState)(null);
  let [currentActiveLaunch, setCurrentActiveLaunch] = (0, _react.useState)(null);
  let [currentActiveLanding, setCurrentActiveLanding] = (0, _react.useState)(null);

  let handleGroupByCategory = evt => {
    let {
      textContent
    } = evt.target;
    setCurrentActiveCategory(textContent);
    (0, _utils.setBrowserQueryParams)("launchYear", textContent);
    dispatch((0, _categories.getAllCategories)());
  };

  let handleSuccessFulLaunch = evt => {
    let {
      value
    } = evt.target;
    setCurrentActiveLaunch(value);
    (0, _utils.setBrowserQueryParams)("successFulLaunch", value);
    dispatch((0, _categories.getAllCategories)());
  };

  let handleSuccessFulLanding = evt => {
    let {
      value
    } = evt.target;
    setCurrentActiveLanding(value);
    (0, _utils.setBrowserQueryParams)("successFulLanding", value);
    dispatch((0, _categories.getAllCategories)());
  };

  (0, _react.useEffect)(() => {
    setCurrentActiveCategory((0, _utils.getLaunchYear)());
    setCurrentActiveLaunch((0, _utils.getSuccessFulLaunch)());
    setCurrentActiveLanding((0, _utils.getSuccessFulLanding)());
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "side-bar position-sticky side-bar-sm side-bar-md side-bar-lg side-bar-container"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "px-3 pt-2"
  }, "Filters"), /*#__PURE__*/_react.default.createElement("h5", {
    className: "font-weight-light mb-0 text-center"
  }, "Launch Year"), /*#__PURE__*/_react.default.createElement("hr", {
    className: "m-0 mx-3"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "list-group flex-md-row flex-md-wrap justify-content-center justify-content-md-between pb-3"
  }, _constants.yearCategories && _constants.yearCategories.map(cat => /*#__PURE__*/_react.default.createElement("button", {
    key: cat.name,
    className: `btn btn-sm mx-auto mx-md-3 mt-3 w-33 side-bar-item ${currentActiveCategory === cat.name && "active"}`,
    onClick: handleGroupByCategory,
    href: "#list-section"
  }, cat.name))), /*#__PURE__*/_react.default.createElement("h5", {
    className: "font-weight-light mb-0 text-center"
  }, "Succesful Launch"), /*#__PURE__*/_react.default.createElement("hr", {
    className: "m-0 mx-3"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "list-group flex-md-row flex-md-wrap justify-content-center justify-content-md-between pb-3"
  }, _constants.successFulLaunchList && _constants.successFulLaunchList.map(launch => /*#__PURE__*/_react.default.createElement("button", {
    key: launch.name,
    className: `btn btn-sm mx-auto mx-md-3 mt-3 w-33 side-bar-item ${currentActiveLaunch === launch.value && "active"}`,
    onClick: handleSuccessFulLaunch,
    value: launch.value,
    href: "#list-section"
  }, launch.name))), /*#__PURE__*/_react.default.createElement("h5", {
    className: "font-weight-light mb-0 text-center"
  }, "Succesful Landing"), /*#__PURE__*/_react.default.createElement("hr", {
    className: "m-0 mx-3"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "list-group flex-md-row flex-md-wrap justify-content-center justify-content-md-between pb-3"
  }, _constants.successFulLandingList && _constants.successFulLandingList.map(land => /*#__PURE__*/_react.default.createElement("button", {
    key: land.name,
    className: `btn btn-sm mx-auto mx-md-3 mt-3 w-33 side-bar-item ${currentActiveLanding === land.value && "active"}`,
    onClick: handleSuccessFulLanding,
    value: land.value,
    href: "#list-section"
  }, land.name))));
}

var _default = CategoryTypeSideBar;
exports.default = _default;