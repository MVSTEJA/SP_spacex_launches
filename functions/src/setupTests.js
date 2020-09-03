"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("@testing-library/jest-dom/extend-expect");

var _enzyme = _interopRequireDefault(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});