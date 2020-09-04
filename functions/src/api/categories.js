"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllCategories = void 0;

var _axios = _interopRequireDefault(require("axios"));

const getAllCategories = async ({
  limit = 10,
  offsetBy = 0,
  launchYear,
  successFullLaunch,
  successFullLanding
}) => {
  let requestURL = `https://api.spaceXdata.com/v3/launches?limit=${limit}&offset=${offsetBy}`;

  if (launchYear) {
    requestURL = `${requestURL}&launch_year=${launchYear}`;
  }

  if (successFullLanding) {
    requestURL = `${requestURL}&land_success=${successFullLanding}`;
  }

  if (successFullLaunch) {
    requestURL = `${requestURL}&launch_success=${successFullLaunch}`;
  }

  try {
    let response = await _axios.default.get(requestURL);
    return {
      categories: response.data
    };
  } catch (error) {
    return {
      error
    };
  }
};

exports.getAllCategories = getAllCategories;