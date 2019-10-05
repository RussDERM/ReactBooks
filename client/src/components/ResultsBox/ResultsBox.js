import React from "react";
import "./ResultsBox.css";

const ResultsBox = props => {
  // trying CS6..
  return props.books.length === 0 ? (
    <div>No Search Results</div>
  ) : (
    <div>
      Results
      {props.books.map(book => {
        return (
          <>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.description}</p>
          </>
        );
      })}
    </div>
  );
};

export default ResultsBox;
