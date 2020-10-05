import React, {useState} from "react";

const SearchField = ({setQuery}) => {
  const [key, setKey] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(key);
    setKey('');
  }
  return (
    <div className="searchfield">
      <form onSubmit={submitHandler}>
        <div class="form-group">
          <input
            type="text"
            className="form-control mx-auto"
            aria-describedby="emailHelp"
            placeholder="Enter search text..."
            value={key}
            onChange={(e)=>setKey(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">Search</button>
      </form>
    </div>
  );
};

export default SearchField;
