import React from "react";
import CategoryTypeSideBar from "./index";
import { mount } from "./../../test-utils";
import categories from "./../../reducers/categories";

test("category type sidebar", () => {
  const component = mount(<CategoryTypeSideBar />, {
    initialState: { categoriesList: [] },
    reducer: categories
  });

  const elementExists = component.find(".side-bar").exists();

  expect(elementExists).toBe(true);
});
