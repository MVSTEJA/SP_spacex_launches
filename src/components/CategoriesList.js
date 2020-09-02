import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryListItem from "./CategoryListItem";
import { loadMoreCategories } from "../actions/categories";
import { DEFAULT_OFFSET } from "../constants";

export const CategoriesList = ({ categoriesList = [] }) => {
  let dispatch = useDispatch();

  const isLoadMoreVisible = useSelector(
    (state) => state.categoriesList.isLoadMoreVisible
  );

  const handleLoadMore = () => {
    dispatch(loadMoreCategories(DEFAULT_OFFSET));
  };

  return (
    <div className="col-lg-10 col-md-8 col-12 d-flex flex-column pt-5 pt-md-0 px-0" id="list-section"> 
      {categoriesList && categoriesList.length > 0 ? (
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 justify-content-around">
            {categoriesList.map((category) => (
              <CategoryListItem
                category={category}
                key={category.flight_number}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="h5 h-100 d-flex justify-content-center align-items-center">
          <p>No items to show.</p>
        </div>
      )}

      {isLoadMoreVisible && categoriesList.length > 0 && (
        <button className="btn btn-info mx-auto text-dark-100" onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CategoriesList;
