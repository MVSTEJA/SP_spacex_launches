"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _categories = _interopRequireDefault(require("./categories"));

const rootReducer = () => (0, _redux.combineReducers)({
  categoriesList: _categories.default
});

var _default = rootReducer;
exports.default = _default;