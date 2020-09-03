"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var actions = _interopRequireWildcard(require("./index"));

var _axiosMockAdapter = _interopRequireDefault(require("axios-mock-adapter"));

var _axios = _interopRequireDefault(require("axios"));

const middlewares = [_reduxThunk.default];
const mockStore = (0, _reduxMockStore.default)(middlewares);
describe("categories actions", () => {
  it("should get all categories", () => {
    const expectedActions = [{
      type: "All_CATEGORIES",
      categories: []
    }, {
      type: "TOGGLE_LOAD_MORE",
      isLoadMoreVisible: false
    }];
    var mock = new _axiosMockAdapter.default(_axios.default);
    const store = mockStore({
      categories: []
    });
    mock.onGet().reply(200, []);
    return store.dispatch(actions.getAllCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      mock.reset();
    });
  });
});