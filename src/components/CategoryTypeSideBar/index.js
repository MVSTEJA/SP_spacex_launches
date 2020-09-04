import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCategories } from "../../actions/categories";
import {
  setBrowserQueryParams,
  getLaunchYear,
  getSuccessFulLaunch,
  getSuccessFulLanding,
} from "../../utils";
import {
  yearCategories,
  successFulLandingList,
  successFulLaunchList,
} from "../../constants";

function CategoryTypeSideBar() {
  let dispatch = useDispatch();

  let [currentActiveCategory, setCurrentActiveCategory] = useState(null);

  let [currentActiveLaunch, setCurrentActiveLaunch] = useState(null);

  let [currentActiveLanding, setCurrentActiveLanding] = useState(null);

  let handleGroupByCategory = (evt) => {
    let { textContent } = evt.target;

    let valueToSet = currentActiveCategory === textContent ? "" : textContent;

    setCurrentActiveCategory(valueToSet);
    setBrowserQueryParams("launchYear", valueToSet);
    dispatch(getAllCategories());
  };

  let handleSuccessFulLaunch = (evt) => {
    let { value } = evt.target;

    let valueToSet = currentActiveLaunch === value ? "" : value;

    setCurrentActiveLaunch(valueToSet);
    setBrowserQueryParams("successFulLaunch", valueToSet);
    dispatch(getAllCategories());
  };

  let handleSuccessFulLanding = (evt) => {
    let { value } = evt.target;
    let valueToSet = currentActiveLanding === value ? "" : value;

    setCurrentActiveLanding(valueToSet);
    setBrowserQueryParams("successFulLanding", valueToSet);
    dispatch(getAllCategories());
  };

  useEffect(() => {
    setCurrentActiveCategory(getLaunchYear());
    setCurrentActiveLaunch(getSuccessFulLaunch());
    setCurrentActiveLanding(getSuccessFulLanding());
  }, []);
  return (
    <div className="side-bar position-sticky side-bar-sm side-bar-md side-bar-lg side-bar-container">
      <h4 className="px-3 pt-2">Filters</h4>
      <h5 className="font-weight-light mb-0 text-center">Launch Year</h5>
      <hr className="m-0 mx-3" />
      <div className="list-group flex-md-row flex-md-wrap justify-content-center justify-content-md-between pb-3">
        {yearCategories &&
          yearCategories.map((cat) => (
            <button
              key={cat.name}
              className={`btn btn-sm mx-auto mx-md-3 mt-3 w-33 side-bar-item ${
                currentActiveCategory === cat.name && "active"
              }`}
              onClick={handleGroupByCategory}
              href="#list-section"
            >
              {cat.name}
            </button>
          ))}
      </div>
      <h5 className="font-weight-light mb-0 text-center">Succesful Launch</h5>
      <hr className="m-0 mx-3" />
      <div className="list-group flex-md-row flex-md-wrap justify-content-center justify-content-md-between pb-3">
        {successFulLaunchList &&
          successFulLaunchList.map((launch) => (
            <button
              key={launch.name}
              className={`btn btn-sm mx-auto mx-md-3 mt-3 w-33 side-bar-item ${
                currentActiveLaunch === launch.value && "active"
              }`}
              onClick={handleSuccessFulLaunch}
              value={launch.value}
              href="#list-section"
            >
              {launch.name}
            </button>
          ))}
      </div>

      <h5 className="font-weight-light mb-0 text-center">Succesful Landing</h5>
      <hr className="m-0 mx-3" />
      <div className="list-group flex-md-row flex-md-wrap justify-content-center justify-content-md-between pb-3">
        {successFulLandingList &&
          successFulLandingList.map((land) => (
            <button
              key={land.name}
              className={`btn btn-sm mx-auto mx-md-3 mt-3 w-33 side-bar-item ${
                currentActiveLanding === land.value && "active"
              }`}
              onClick={handleSuccessFulLanding}
              value={land.value}
              href="#list-section"
            >
              {land.name}
            </button>
          ))}
      </div>
    </div>
  );
}

export default CategoryTypeSideBar;
