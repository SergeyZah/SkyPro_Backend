const Book = require("../models/book");

const getBooks = (request, response) => {
  return User.find({}).then((data) => {
    response.status(200).send(data);
  }).catch(e => response.status(500).send(e.message));
};

const getBook = (request, response) => {
  const { book_id } = request.params;
  return User.findById(book_id).then((user) => {
    response.status(200).send(user);
  }).catch(e => response.status(500).send(e.message));
};

const createBook = (request, response) => {
  return Book.create({ ...request.body }).then((user) => {
    response.status(201).send(user);
  }).catch(e => response.status(500).send(e.message));
};

const updateBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findByIdAndUpdate(book_id, { ...request.body }).then((book) => {
    response.status(200).send(book);
  }).catch(e => response.status(500).send(e.message));
};

const deleteBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findByIdAndDelete(book_id).then((book) => {
    response.status(200).send('Success');
  }).catch(e => response.status(500).send(e.message));
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};