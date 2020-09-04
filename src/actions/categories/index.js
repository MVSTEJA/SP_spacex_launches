import * as categoriesApi from "../../api/categories";
import {
  getLaunchYear,
  getSuccessFulLanding,
  getSuccessFulLaunch,
} from "../../utils";

export const errorGetCategories= (error = {}) => ({
  type: "ERROR_GET_CATEGORIES",
  error
});

export const getAllCategories = () => async (dispatch) => {
  let filterBy = {
    launchYear: getLaunchYear(),
    successFullLaunch: getSuccessFulLaunch(),
    successFullLanding: getSuccessFulLanding(),
  };

  let { categories, error } = await categoriesApi.getAllCategories({
    ...filterBy,
  });
  if (categories) {
    dispatch({
      type: "All_CATEGORIES",
      categories,
    });

    dispatch({
      type: "TOGGLE_LOAD_MORE",
      isLoadMoreVisible: categories.length === 10,
    });
  } else {
    dispatch(errorGetCategories(error));
  }
};

export const loadMoreCategories = (offsetBy) => async (dispatch) => {
  let filterBy = {
    launchYear: getLaunchYear(),
    successFullLaunch: getSuccessFulLaunch(),
    successFullLanding: getSuccessFulLanding(),
  };
  let { categories, error } = await categoriesApi.getAllCategories({
    ...filterBy,
    offsetBy,
  });

  if (categories) {
    dispatch({
      type: "INCREMENT_CATEGORY_OFFSET",
      offsetBy,
    });

    dispatch({
      type: "LOAD_MORE_CATEGORIES",
      categories,
    });

    dispatch({
      type: "TOGGLE_LOAD_MORE",
      isLoadMoreVisible: categories.length === 10,
    });
  } else {
    dispatch(errorGetCategories(error));
  }
};
