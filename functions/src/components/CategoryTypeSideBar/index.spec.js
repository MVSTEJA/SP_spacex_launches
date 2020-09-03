"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

var _testUtils = require("./../../test-utils");

var _categories = _interopRequireDefault(require("./../../reducers/categories"));

test("category type sidebar", () => {
  const component = (0, _testUtils.mount)( /*#__PURE__*/_react.default.createElement(_index.default, null), {
    initialState: {
      categoriesList: []
    },
    reducer: _categories.default
  });
  const elementExists = component.find(".side-bar").exists();
  expect(elementExists).toBe(true);
});