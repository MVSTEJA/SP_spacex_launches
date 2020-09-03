import React from "react";
import CategoriesListContainer from "./index";
import { mount } from "./../../test-utils";
import categories from "./../../reducers/categories";

test("category type sidebar", () => {
  const component = mount(<CategoriesListContainer />, {
    initialState: {
      categoriesList: {
        categories: [],
      },
    },
    reducer: categories,
    dispatch: jest.fn(),
  });

  const elementExists = component.find("#list-section").exists();

  expect(elementExists).toBe(true);
});
