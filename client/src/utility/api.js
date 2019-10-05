import axios from "axios";

export default {
  // ? Search Function
  getGoogleSearchBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
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
  saveBook: function(savedBooks) {
    return axios.post("/api/books", savedBooks);
  },
  //*Delete from DB
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
