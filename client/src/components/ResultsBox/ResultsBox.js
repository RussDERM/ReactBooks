import React from "react";
import "./ResultsBox.css";

// *Componennt Import
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ResultsBox = props => {
  // trying CS6..
  return props.books.length === 0 ? (
    <div className="resultsBox">No Results Found.</div>
  ) : (
    <div className="resultsBox">
      <CardColumns>
        {props.books.map(book => {
          return (
            <Card className="book">
              <Card.Img variant="top" src={book.image} />
              <Card.Body>
                <Card.Title>
                  <span className="title">{book.title}</span>
                </Card.Title>
                <Card.Text>{book.description}</Card.Text>
              </Card.Body>
            </Card>
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
