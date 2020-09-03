import React from "react";
import { mount as enzymeMount, shallow as enzymeShallow } from "enzyme";
import { createStore } from "redux";
import { Provider } from "react-redux";

function mount(ui, { initialState, reducer, dispatch } = {}) {
  let mockStore = createStore(reducer, initialState);

  if (dispatch) {
    mockStore.dispatch = jest.fn();
  }
  return enzymeMount(<Provider store={mockStore}>{ui}</Provider>);
}

function shallow(ui, { initialState, reducer, dispatch } = {}) {
  let mockStore = createStore(reducer, initialState);
  if (dispatch) {
    mockStore.dispatch = jest.fn();
  }
  return enzymeShallow(<Provider store={mockStore}>{ui}</Provider>);
}

// override render method
export { mount, shallow };
