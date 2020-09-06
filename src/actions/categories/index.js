import * as categoriesApi from "../../api/categories";
import {
  getLaunchYear,
  getSuccessFulLanding,
  getSuccessFulLaunch,
} from "../../utils";

export const errorGetCategories = (error = {}) => ({
  type: "ERROR_GET_CATEGORIES",
  error,
});

export const isCategoriesLoading = (loading) => ({
  type: "IS_CATEGORIES_LOADING",
  loading,
});

export const getAllCategories = () => async (dispatch) => {
  let filterBy = {
    launchYear: getLaunchYear(),
    successFullLaunch: getSuccessFulLaunch(),
    successFullLanding: getSuccessFulLanding(),
  };

  dispatch(isCategoriesLoading(true));

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

  dispatch(isCategoriesLoading(false));
};

export const loadMoreCategories = (offsetBy) => async (dispatch) => {
  let filterBy = {
    launchYear: getLaunchYear(),
    successFullLaunch: getSuccessFulLaunch(),
    successFullLanding: getSuccessFulLanding(),
  };
  dispatch(isCategoriesLoading(true));
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

  dispatch(isCategoriesLoading(false));
};
