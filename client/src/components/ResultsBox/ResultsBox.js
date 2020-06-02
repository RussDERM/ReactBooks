import React from "react";
import "./ResultsBox.css";

// *Componennt Import
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const ResultsBox = props => {
  console.log(props);
  
  // trying CS6..
  return (
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
              <ListGroup className="list-group-flush">
                <ListGroupItem className="lgiContainer">
                  <a className="lgi" type='view' href={book.link} target='_blank'>
                    View
                    <i className="view far fa-eye"> </i>
                  </a>
                  <div className="lgi">
                    Save
                    <i class="save far fa-heart"> </i>
                  </div>
                </ListGroupItem>
              </ListGroup>
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
