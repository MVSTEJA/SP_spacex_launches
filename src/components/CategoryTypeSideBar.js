import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../actions/categories";
import {
  setBrowserQueryParams,
  getLaunchYear,
  getSuccessFulLaunch,
  getSuccessFulLanding,
} from "../utils";
import {
  cartCategories,
  successFulLandingList,
  successFulLaunchList,
} from "../constants";

function CategoryTypeSideBar() {
  // let { cartCategories } = useSelector((state) => state.cartHash);
  let dispatch = useDispatch();

  let [currentActiveCategory, setCurrentActiveCategory] = useState(null);

  let [currentActiveLaunch, setCurrentActiveLaunch] = useState(null);

  let [currentActiveLanding, setCurrentActiveLanding] = useState(null);

  let handleGroupByCategory = (evt) => {
    let { textContent } = evt.target;
    setCurrentActiveCategory(textContent);

    setBrowserQueryParams("launchYear", textContent);
    dispatch(getAllCategories());
  };

  let handleSuccessFulLaunch = (evt) => {
    let { value } = evt.target;
    setCurrentActiveLaunch(value);

    setBrowserQueryParams("successFulLaunch", value);
    dispatch(getAllCategories());
  };

  let handleSuccessFulLanding = (evt) => {
    let { value } = evt.target;
    setCurrentActiveLanding(value);

    setBrowserQueryParams("successFulLanding", value);
    dispatch(getAllCategories());
  };

  useEffect(() => {
    setCurrentActiveCategory(getLaunchYear());
    setCurrentActiveLaunch(getSuccessFulLaunch());
    setCurrentActiveLanding(getSuccessFulLanding());
  }, []);
  return (
    <div className="side-bar col-12 col-md-4 col-lg-2 position-sticky side-bar-container">
      <h5 className="pl-3 pt-3">Filters</h5>
      <div className="lead text-center">Launch Year</div>
      <hr className="m-0" />
      <ul className="list-group flex-md-row flex-md-wrap justify-content-center justify-content-md-between pb-3">
        {cartCategories &&
          cartCategories.map((cat) => (
            <button
              key={cat.name}
              className={`btn btn-success btn-sm mx-auto mx-md-3 mt-3 w-33 side-bar-item ${
                currentActiveCategory === cat.name && "active"
              }`}
              onClick={handleGroupByCategory}
            >
              {cat.name}
            </button>
          ))}
      </ul>
      <div className="lead text-center">Succesful Launch</div>
      <hr className="m-0" />
      <ul className="list-group flex-md-row flex-md-wrap justify-content-center justify-content-md-between pb-3">
        {successFulLaunchList &&
          successFulLaunchList.map((launch) => (
            <button
              key={launch.name}
              className={`btn btn-success btn-sm mx-auto mx-md-3 mt-3 w-33 side-bar-item ${
                currentActiveLaunch === launch.value && "active"
              }`}
              onClick={handleSuccessFulLaunch}
              value={launch.value}
            >
              {launch.name}
            </button>
          ))}
      </ul>

      <div className="lead text-center">Succesful Landing</div>
      <hr className="m-0" />
      <ul className="list-group flex-md-row flex-md-wrap justify-content-center justify-content-md-between pb-3">
        {successFulLandingList &&
          successFulLandingList.map((land) => (
            <button
              key={land.name}
              className={`btn btn-success btn-sm mx-auto mx-md-3 mt-3 w-33 side-bar-item ${
                currentActiveLanding === land.value && "active"
              }`}
              onClick={handleSuccessFulLanding}
              value={land.value}
            >
              {land.name}
            </button>
          ))}
      </ul>
    </div>
  );
}

export default CategoryTypeSideBar;
