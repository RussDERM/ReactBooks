import React from "react";
import "./ResultsBox.css";
import BookCard from '../BookCard/BookCard'


// *Bootstrap Import
import CardColumns from "react-bootstrap/CardColumns";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";

const ResultsBox = props => {
  

  
  // trying CS6..
  return (
    <div className="resultsBox">
      <CardColumns>
        {props.books.map(book => {
          return (
            <BookCard 
            key={book.link}
            title={book.title}
            description={book.description}
            link={book.link}
            image={book.image}
            />
          );
        })}
      </CardColumns>
    </div>
  );
};
// <p>{book.title}</p>
// <p>{book.author}</p>
// <p>{book.description}</p>

export default ResultsBox;
