import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loadable from "react-loadable";
import { ToastContainer, toast } from "react-toastify";
import { errorGetCategories } from "./actions/categories";

const AsyncCategoryTypeSideBar = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "myNamedChunk1" */ "./components/CategoryTypeSideBar"
    ),
  loading: () => <div>loading...</div>,
  modules: ["myNamedChunk2"],
});

const AsyncCategoriesList = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "myNamedChunk2" */ "./containers/CategoriesListContainer"
    ),
  loading: () => <div>loading...</div>,
  modules: ["myNamedChunk1"],
});

const App = () => {
  const { response, message } =
    useSelector((state) => state.categoriesList.categoriesError) || {};

  console.log(response, message);

  let dispatch = useDispatch();
  useEffect(() => {
    if (message) {
      toast.error(message);
      dispatch(errorGetCategories());
    }
  }, [message, dispatch]);

  return (
    <div className="jumbotron">
      <div className="pt-2 high-res-desktop mx-auto">
        <nav className="position-sticky app-nav-bar">
          <h1>SpaceX Launch Programs</h1>
        </nav>
        <main className="row mx-0">
          <AsyncCategoryTypeSideBar />
          <AsyncCategoriesList />
        </main>
        <footer className="d-flex justify-content-center mt-5">
          <h5>
            Developed by
            <span className="font-weight-light align-self-baseline">
              : MVS Teja
            </span>
          </h5>
        </footer>
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
