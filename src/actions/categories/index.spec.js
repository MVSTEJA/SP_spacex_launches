import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./index";
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("categories actions", () => {

  it("should get all categories", () => {
    const expectedActions = [
      { type: "All_CATEGORIES", categories: []  },
      { type: "TOGGLE_LOAD_MORE", isLoadMoreVisible: false},
    ];

    var mock = new MockAdapter(axios);

    const store = mockStore({
      categories: [],
    });

    mock.onGet().reply(200, [])

    return store.dispatch(actions.getAllCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      mock.reset();
    });
  });
});
