const Book = require('../models/book');

const getBooks = (request, response) => {
    return Book.find({}).then((data) => {
        response.status(200);
        response.send(data);
    }).catch((error) => response.status(500).send(error.message));
};

const getBook = (request, response) => {
    const { book_id } = request.params;
    return Book.findById(book_id).then((book) => {
        response.status(200);
        response.send(book);
    }).catch((error) => response.status(500).send(error.message));
};

const createBook = (request, response) => {
    return Book.create({ ...request.body }).then((book) => {
        response.status(201);
        response.send(book);
    }).catch((error) => response.status(500).send(error.message));
};

const updateBook = (request, response) => {
    const { book_id } = request.params;
    return Book.findByIdAndUpdate(book_id, { ...request.body }).then((book) => {
        response.status(200);
        response.send(book);
    }).catch((error) => response.status(500).send(error.message));
};

const deleteBook = (request, response) => {
    const { book_id } = request.params;
    return Book.findByIdAndDelete(book_id).then((book) => {
        response.status(200);
        response.send(book.author + ', ' + book.title + ', has been removed');
    }).catch((error) => response.status(500).send(error.message));
}

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}