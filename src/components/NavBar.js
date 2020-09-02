import React from "react";

const NavBar = () => {
  return (
    <nav className="nav mt-4 px-5 nav-tabs align-items-center position-sticky app-nav-bar" >
      <li className="nav-item">
        <h3 className="mb-0">
          <button
            className="nav-link active"
            data-nav-path="categories"
            style={{
              height: "70px",
            }}
          >
            Categories
          </button>{" "}
        </h3>
      </li>
      <li
        className="d-flex justify-content-end"
        style={{
          flex: 1,
        }}
      >
      </li>
    </nav>
  );
};

export default NavBar;
