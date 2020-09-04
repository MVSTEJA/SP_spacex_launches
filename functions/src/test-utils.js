"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mount = mount;
exports.shallow = shallow;

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _redux = require("redux");

var _reactRedux = require("react-redux");

function mount(ui, {
  initialState,
  reducer,
  dispatch
} = {}) {
  let mockStore = (0, _redux.createStore)(reducer, initialState);

  if (dispatch) {
    mockStore.dispatch = jest.fn();
  }

  return (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: mockStore
  }, ui));
}

function shallow(ui, {
  initialState,
  reducer,
  dispatch
} = {}) {
  let mockStore = (0, _redux.createStore)(reducer, initialState);

  if (dispatch) {
    mockStore.dispatch = jest.fn();
  }

  return (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: mockStore
  }, ui));
}