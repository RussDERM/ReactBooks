import React from "react";

// *Bootstrap Import
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";


const BookCard = props => {
    const { image, title, link, description} = props;


    return (
 <Card className="book">
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>
                  <span className="title">{title}</span>
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
                    Save
                    <i class="save far fa-heart"> </i>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </Card>
    )
}


export default BookCard