import React from "react";
import { Link } from "react-router-dom";

const SingleItem = ({
  label,
  image,
  id,
  data,
  bookmarks,
  setBookmarks,
  showAlert,
}) => {
  const bookMarkIncludeCondition =
    bookmarks.map((item) => item.recipe.label).indexOf(label) !== -1;
  const bookmarkHandler = (e) => {
    e.preventDefault();
    if (bookMarkIncludeCondition) {
      showAlert(`${label} was already in the bookmarks`, "danger");
      return;
    }
    setBookmarks([data, ...bookmarks]);
    showAlert(`${label} was succesfully added to Bookmarks`, "success");
  };
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">{label}</h5>
        <a
          href="#"
          data-toggle="tooltip"
          title="Add to bookmarks"
          onClick={bookmarkHandler}
        >
          <i
            class="fa fa-bookmark fa-2x"
            aria-hidden="true"
            style={bookMarkIncludeCondition ? { color: "yellow" } : null}
          ></i>
        </a>
      </div>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">
          This card has supporting text below as a natural lead-in to additional
          content.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
        <button type="button" class="btn btn-info">
          <Link style={{color:'white'}}
            to={{
              pathname: `/RecipeDetails/${id}`,
              state: {
                data: data,
              },
            }}
          >
            See Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
