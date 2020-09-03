import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const CategoryListItem = ({ category = {} }) => {
  let {
    launch_success = "",
    rocket: {
      first_stage: { cores },
    },
  } = category;

  let { land_success = "" } = cores[0];
  return (
    <div className="card mb-5 w-xl-24 w-md-48 mr-2">
      <div className="card-header mt-3 nb-b mx-3">
        <LazyLoadImage
          wrapperClassName="mx-auto h-100 placeholder-image"
          src={category.links.mission_patch}
          alt="Card cap"
          width="100%"
          effect="blur"
          placeholderSrc={require("../images/image-placeholder.png")}
        />
      </div>

      <div className="card-body p-3">
        <div className="card-text font-weight-bold mb-2">
          {category.mission_name}{" "}
          <span className="pl-1">#{category.flight_number}</span>
        </div>
        {category.mission_id.length > 0 && (
          <div className="card-text">
            <span className="mb-0 font-weight-bold">Mission Ids:</span>
            <ul className="mb-2">
              {category.mission_id.map((id) => (
                <li key={id}>{id}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="card-text mb-2">
          <dl className="row mb-0">
            <dt className="col-8">Launch Year: </dt>
            <dd className="col-4">
              <span className="font-weight-light">{category.launch_year}</span>
            </dd>
          </dl>
        </div>

        <div className="card-text mb-2">
          <dl className="row mb-0">
            <dt className="col-8">Successful Launch: </dt>
            <dd className="col-4">
              <span className="font-weight-light">
                {launch_success && launch_success.toString()}
              </span>
            </dd>
          </dl>
        </div>

        <div className="card-text mb-2">
          <dl className="row mb-0">
            <dt className="col-8">Successful Landing: </dt>
            <dd className="col-4">
              <span className="font-weight-light">
                {land_success && land_success.toString()}
              </span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CategoryListItem;
