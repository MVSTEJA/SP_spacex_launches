import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoriesList from "../../components/CategoriesList";
import { getAllCategories } from "../../actions/categories";

const CategoriesListContainer = () => {
  const categoriesList = useSelector(
    (state) => state.categoriesList.categories
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <CategoriesList
      categoriesList={categoriesList}
    />
  );
};

export default CategoriesListContainer;
