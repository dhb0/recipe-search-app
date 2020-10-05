import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import { Link } from "react-router-dom";

const RecipeDetails = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const location = useLocation();
  const history = useHistory();
  const pageData = location.state.data.recipe;
  return (
    <div>
      <header id="mainheader" className="text-center">
        <h1 className="main-title">Recipe Search App</h1>
      </header>

      <div className="detail-tabs container pt-4">
        <button
          className="btn btn-primary my-4"
          onClick={() => history.goBack()}
        >
          Go Back
        </button>
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              class="nav-item nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Home
            </a>
            <a
              class="nav-item nav-link"
              id="nav-ingredients-tab"
              data-toggle="tab"
              href="#nav-ingredients"
              role="tab"
              aria-controls="nav-ingredients"
              aria-selected="false"
            >
              Ingredient Details
            </a>
          </div>
        </nav>
        <div class="tab-content my-4" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <strong>Name:</strong> {pageData.label} <br />
            <strong>Calories:</strong> {pageData.calories.toString()} <br />
            <strong>Cautions:</strong> {pageData.cautions.join(", ")} <br />
            <strong>Diet Labels:</strong> {pageData.dietLabels.join(", ")}{" "}
            <br />
            <strong>Health Labels:</strong> {pageData.healthLabels.join(", ")}{" "}
            <br />
            <img
              src={pageData.image}
              className="img-fluid img-thumbnail"
              alt=""
            />
            <br />
            <strong>INGREDIENTS</strong>
            <ul>
              {pageData.ingredientLines.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>{" "}
            <br />
            <strong>Source:</strong> {pageData.source}
          </div>
          <div
            class="tab-pane fade"
            id="nav-ingredients"
            role="tabpanel"
            aria-labelledby="nav-ingredients-tab"
          >
            <div class="gallery container row mx-auto text-center">
              <p className="lead col-12 my-4">Click Images for the Details</p>
              {pageData.ingredients.map((item) => {
                return (
                  <div class="col-6 col-sm-6 col-md-4 col-lg-3 my-1 mx-auto my-4">
                    <a
                      href={
                        item.image !== null
                          ? item.image
                          : "https://egeosgb.com.tr/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png"
                      }
                      data-title={item.text}
                      data-lightbox="ingredients-gallery"
                    >
                      <img
                        src={
                          item.image !== null
                            ? item.image
                            : "https://egeosgb.com.tr/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png"
                        }
                        class="img-thumbnail"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
