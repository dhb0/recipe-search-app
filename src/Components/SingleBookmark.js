import React from 'react';
import {Link} from 'react-router-dom'

const SingleBookmark = ({data, id, bookmarks, setBookmarks, showAlert}) => {
    const deleteItem = (e) => {
        e.preventDefault();
        let mutateBookmarks = JSON.parse(JSON.stringify([...bookmarks]));
        setBookmarks(mutateBookmarks.filter(item => item.recipe.label !== data.recipe.label));
        showAlert(`${data.recipe.label} was succesfully removed from bookmarks.`, 'success');
    }
    return (
        <div className="card">
        <div className="card-header">
          <h5 className="card-title">{data.recipe.label}</h5>
          <a
            href="#"
            data-toggle="tooltip"
            title="Clear from bookmarks"
            onClick={deleteItem}
          >
            <i
              class="fa fa-trash fa-2x"
              style={{color:'red'}}
              aria-hidden="true"
            ></i>
          </a>
        </div>
        <img className="card-img-top" src={data.recipe.image} alt="Card image cap" />
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
                  data:data
                },
              }}
            >
              See Details
            </Link>
          </button>
        </div>
      </div>
    )
}

export default SingleBookmark
