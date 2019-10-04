// * Requirements
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: [
    {
      type: String,
      required: true
    }
  ],
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

const Book = mongoose.model("Book", bookschema);
module.exports = Book;
