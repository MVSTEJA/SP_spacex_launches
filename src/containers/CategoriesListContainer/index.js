import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoriesList from "../../components/CategoriesList";
import { getAllCategories } from "../../actions/categories";

const CategoriesListContainer = () => {
  const { categories: categoriesList, isCategoriesLoading } = useSelector(
    (state) => state.categoriesList
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <React.Fragment>
      {isCategoriesLoading ? (
        <div className="d-flex align-items-center list-section list-section-lg list-section-md list-section-sm justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
       ) : (
        <CategoriesList categoriesList={categoriesList} />
      )}
    </React.Fragment>
  );
};

export default CategoriesListContainer;
