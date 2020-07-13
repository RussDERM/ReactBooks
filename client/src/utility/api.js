import axios from "axios";

export default {
  // ? Search Function
  getGoogleSearchBooks: function(query) {
    const queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + query;
    return axios.get(queryURL);
  },

  //*Return saved books
  getBooks: function() {
    return axios.get("/api/books");
  },
  //*View single book
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  //* Save to DB
  saveBook: function(saveBook) {
    return axios.post("/api/books", saveBook);
  },
  //*Delete from DB
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
