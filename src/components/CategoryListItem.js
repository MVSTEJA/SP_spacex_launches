import React from "react";
import { useImage } from "react-image";
// import imagePlaceholder from "../images/image-placeholder.png";

export const CategoryListItem = ({ category = {} }) => {
  const { src, isLoading } = useImage({
    srcList: category.links.mission_patch,
    useSuspense: false,
  });

  return (
    <div className="card mb-5 mr-md-2 w-md-20 w-100">
      {!isLoading ? (
        <img
          className="card-header mt-3 mx-auto w-80 nb-b card-img-top"
          src={src}
          alt="Card cap"
          loading="lazy"
        />
      ) : (
        <img
          className="card-header mt-3 mx-auto w-80 nb-b card-img-top"
          src={require("../images/image-placeholder.png")}
          alt="Card cap"
        />
      )}
      {/* <ProgressiveImage
        className={"cover"}
        alt={"woman"}
        overlaySrc={imagePlaceholder}
        src={category.links.mission_patch}
      /> */}
      <div className="card-body">
        <p className="card-text">
          {category.mission_name} #{category.flight_number}
        </p>
        <p className="card-text">Price: {category.price}</p>
      </div>
    </div>
  );
};

export default CategoryListItem;
