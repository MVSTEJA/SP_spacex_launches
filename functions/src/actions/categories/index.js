"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadMoreCategories = exports.getAllCategories = void 0;

var categoriesApi = _interopRequireWildcard(require("../../api/categories"));

var _utils = require("../../utils");

const getAllCategories = () => async dispatch => {
  let filterBy = {
    launchYear: (0, _utils.getLaunchYear)(),
    successFullLaunch: (0, _utils.getSuccessFulLaunch)(),
    successFullLanding: (0, _utils.getSuccessFulLanding)()
  };
  let {
    categories,
    error
  } = await categoriesApi.getAllCategories({ ...filterBy
  });

  if (categories) {
    dispatch({
      type: "All_CATEGORIES",
      categories
    });
    dispatch({
      type: "TOGGLE_LOAD_MORE",
      isLoadMoreVisible: categories.length === 10
    });
  } else {
    dispatch({
      type: "ERROR_GET_CATEGORIES",
      error
    });
  }
};

exports.getAllCategories = getAllCategories;

const loadMoreCategories = offsetBy => async dispatch => {
  let filterBy = {
    launchYear: (0, _utils.getLaunchYear)(),
    successFullLaunch: (0, _utils.getSuccessFulLaunch)(),
    successFullLanding: (0, _utils.getSuccessFulLanding)()
  };
  let {
    categories,
    error
  } = await categoriesApi.getAllCategories({ ...filterBy,
    offsetBy
  });

  if (categories) {
    dispatch({
      type: "INCREMENT_CATEGORY_OFFSET",
      offsetBy
    });
    dispatch({
      type: "LOAD_MORE_CATEGORIES",
      categories
    });
    dispatch({
      type: "TOGGLE_LOAD_MORE",
      isLoadMoreVisible: categories.length === 10
    });
  } else {
    dispatch({
      type: "ERROR_GET_CATEGORIES",
      error
    });
  }
};

exports.loadMoreCategories = loadMoreCategories;