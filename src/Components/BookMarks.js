import React from "react";
import SingleBookmark from "./SingleBookmark";
import { v4 as uuidv4 } from "uuid";

const BookMarks = ({ bookmarks, setBookmarks, showAlert }) => {
  const clearAll = (e) => {
    e.preventDefault();
    if (bookmarks.length === 0) {
      return;
    } else {
      setBookmarks([]);
      showAlert("All bookmarks were cleaned", "success");
    }
  };
  return (
    <div className="container text-center">
      <h1 className="my-4">Bookmarks</h1>
      <button type="button" class="btn btn-danger w-100" onClick={clearAll}>
        Clear All
      </button>
      <div className="card-deck">
        {bookmarks.map((item, index) => {
          return (
            <SingleBookmark
              bookmarks={bookmarks}
              setBookmarks={setBookmarks}
              showAlert={showAlert}
              data={item}
              id={uuidv4()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BookMarks;
