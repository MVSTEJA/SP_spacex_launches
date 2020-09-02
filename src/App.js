import React from "react";
import PropTypes from "prop-types";
import CategoriesList from './containers/CategoriesListContainer'
import CategoryTypeSideBar from './components/CategoryTypeSideBar'

const App = () => {
  return (
    <React.Fragment>
      {/* <NavBar /> */}
      <div className="jumbotron row p-5 ">
        <CategoryTypeSideBar />
        <CategoriesList />
      </div>
    </React.Fragment>
  );
};

App.propTypes = {
  history: PropTypes.object,
};

export default App;
