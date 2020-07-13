import React from "react";


// *Bootstrap Import
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

// * Assign key values to book object..

const BookCard = props => {
  const { image, title, author, link, description, handleSavedButton} = props;
  
  // 
  function bookJSON(book) {
    return {
      title: title,
      author: author[0],
      description: description,
      link: link,
    }
  }

    return (
 <Card className="book">
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>
                  <span className="title">{`${title} - ${author}`}</span>
                </Card.Title>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem className="lgiContainer">
                  <a className="lgi" type='view' href={link} target='_blank'>
                    View
                    <i className="view far fa-eye"> </i>
                  </a>
                  <div className="lgi">
                    <button onClick={() => handleSavedButton(bookJSON())}>
                    Save
                    <i className="save far fa-heart"> </i>
                    </button>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </Card>
    )
}


export default BookCard