import React from "react";
import Loadable from "react-loadable";

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
  return (
    <React.Fragment>
      <div className="jumbotron pt-2 px-4">
        <nav>
          <h1>SpaceX Launch Programs</h1>
        </nav>
        <main className="row">
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
      </div>
    </React.Fragment>
  );
};

export default App;
