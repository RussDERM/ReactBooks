import React from "react";
// * Components
import Container from "react-bootstrap/Container";
import SearchBox from "../components/SearchBox/SearchBox";
import ResultsBox from "../components/ResultsBox/ResultsBox";
// * Styling
import "./pageStyle.css";
// * Utility
import api from "../utility/api";

class Home extends React.Component {
  //* Home State will hold all query information
  state = { search: "", books: [], error: "", message: "" };

  //* Function for handling search input
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  //* BEGIN Search Function

  handleFormSubmit = event => {
    event.preventDefault();


    // *On Click..
    api
      .getGoogleSearchBooks(this.state.search)
      .then(res => {
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        } else {
          // *Stick the response in an array
          let results = res.data.items;
          console.log(results);
          //* map() array
          results = results.map(result => {
            //*Generate objects from results
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              author: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink
            };
            return result;
          });
          //* Result goes into "state" for further processing
          this.setState({ books: results, error: "" });
        }
      })
      .catch(err => this.setState({ error: err.items }));
  };
  //* END Search Function

  //* Book Save Function
  handleSavedButton = event => {
    event.preventDefault();
    console.log(this.state.books);
    let savedBooks = this.state.books.filter(
      book => book.id === event.target.id
    );
    savedBooks = savedBooks[0];
    api
      .saveBook(savedBooks)
      .then(this.setState({ message: alert("Your selection has been saved") }))
      .catch(err => console.log(err));
  };
  //* END Book Save Function


  // * BEGIN PAGE RENDERING

  render() {
    return (
      <>
        <Container className="box">
          <div className="searchContainer">
            <SearchBox
              className="searchBox"
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </div>
        </Container>
        <Container>
          <ResultsBox className="resultsBox" 
          books={this.state.books}
          onClick={this.handleViewClick}        
          />
        </Container>
      </>
    );
  }
}

export default Home;
