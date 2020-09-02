import * as categoriesApi from "../api/categories";
import {
  getLaunchYear,
  getSuccessFulLanding,
  getSuccessFulLaunch,
} from "../utils";

export const getAllCategories = () => async (dispatch) => {
  let filterBy = {
    launchYear: getLaunchYear(),
    successFullLaunch: getSuccessFulLaunch(),
    successFullLanding: getSuccessFulLanding(),
  };

  let categories = await categoriesApi.getAllCategories({
    ...filterBy,
  });
  dispatch({
    type: "All_CATEGORIES",
    categories,
  });
};

export const loadMoreCategories = (offsetBy) => async (dispatch) => {
  let filterBy = {
    launchYear: getLaunchYear(),
    successFullLaunch: getSuccessFulLaunch(),
    successFullLanding: getSuccessFulLanding(),
  };
  let categories = await categoriesApi.getAllCategories({
    ...filterBy,
    offsetBy,
  });

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
};
