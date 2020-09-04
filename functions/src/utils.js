"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSuccessFulLanding = exports.getSuccessFulLaunch = exports.getLaunchYear = exports.setBrowserQueryParams = exports.debounce = void 0;

const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

exports.debounce = debounce;
const windowObj = typeof window !== "undefined" && window;
const params = windowObj && new URLSearchParams(windowObj.location.search);

const setBrowserQueryParams = (paramsKey, paramsValue) => {
  if (paramsValue === '') {
    params.delete(paramsKey);
  } else {
    params.set(paramsKey, paramsValue);
  }

  let queryURL = windowObj.location.pathname;

  if ([...params.keys()].length > 0) {
    queryURL = `${queryURL}?${params}`;
  }

  windowObj && windowObj.history.replaceState({}, "", queryURL);
};

exports.setBrowserQueryParams = setBrowserQueryParams;

const getLaunchYear = () => {
  return params.get('launchYear');
};

exports.getLaunchYear = getLaunchYear;

const getSuccessFulLaunch = () => {
  return params.get('successFulLaunch');
};

exports.getSuccessFulLaunch = getSuccessFulLaunch;

const getSuccessFulLanding = () => {
  return params.get('successFulLanding');
};

exports.getSuccessFulLanding = getSuccessFulLanding;