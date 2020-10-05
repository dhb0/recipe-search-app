import React, { useState, useEffect } from "react";
import SearchField from "./Components/SearchField";
import BookMarks from "./Components/BookMarks";
import RecipeDisplayArea from "./Components/RecipeDisplayArea";
import Alert from "./Components/Alert";
import axios from "axios";

function App() {
  const initialBookmarks = localStorage.getItem("bookmarks")
  ? JSON.parse(localStorage.getItem("bookmarks"))
  : [];
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [bookmarks, setBookmarks] = useState(initialBookmarks);
  const [alert, setAlert] = useState({ show: false });
  const APP_ID = "8dd26f6d";
  const APP_KEY = "e1a3cadec3a1bce1e147039ff8b4da68";
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const showAlert = (text, type) => {
    setAlert({ show: true, text: text, type: type });
    setTimeout(() => {
      setAlert({ show: false });
    }, 5000);
  };
  useEffect(() => {
    if (query !== "") {
      axios.get(URL).then((response) => {
        setData(response.data.hits);
        if (response.data.hits.length === 0) {
          showAlert("Nothing can be found", "danger");
        }
      });
    }
  }, [query]);
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])

  return (
    <div className="App">
      <header id="mainheader" className="text-center">
        <h1 className="main-title">Recipe Search App</h1>
      </header>
      {alert.show && <Alert alert={alert} />}
      <div className="container tab-area mt-4">
        <nav>
          <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link active"
              id="nav-search-tab"
              data-toggle="tab"
              href="#nav-search"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Home
            </a>
            <a
              className="nav-item nav-link"
              id="nav-bookmark-tab"
              data-toggle="tab"
              href="#nav-bookmark"
              role="tab"
              aria-controls="nav-bookmark"
              aria-selected="false"
            >
              Bookmarks
              <span className="badge badge-pill badge-info">
                {bookmarks.length}
              </span>
            </a>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-search"
            role="tabpanel"
            aria-labelledby="nav-search-tab"
          >
            <SearchField setQuery={setQuery} />
            <RecipeDisplayArea
              data={data}
              setData={setData}
              bookmarks={bookmarks}
              setBookmarks={setBookmarks}
              showAlert={showAlert}
            />
          </div>
          <div
            className="tab-pane fade"
            id="nav-bookmark"
            role="tabpanel"
            aria-labelledby="nav-bookmark-tab"
          >
            <BookMarks bookmarks={bookmarks} setBookmarks={setBookmarks} showAlert={showAlert} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
