import React from "react";
import "./SearchBox.css";

const SearchBox = props => {
  return (
    <div className="form-group">
      <label>Search for a Book!</label>
      <input
        className="form-control"
        value={props.search}
        type="text"
        name="bookSearch"
        placeholder="Book Title"
        onChange={props.handleInputChange}
      ></input>
      <button type="submit" className="submit" onClick={props.handleFormSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SearchBox;
