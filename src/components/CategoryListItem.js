import React from "react";

export const CategoryListItem = ({ category = {} }) => {
  return (
    <div
      className="card mb-5 mr-2 w-20"
    >
      <img className="card-header mt-3 mx-auto w-80 nb-b card-img-top" src={category.links.mission_patch} alt="Card cap" />
      <div className="card-body">
        <p className="card-text">{category.mission_name} #{category.flight_number}</p>
        <p className="card-text">Price: {category.price}</p>
      </div>
    </div>
  );
};

export default CategoryListItem;
