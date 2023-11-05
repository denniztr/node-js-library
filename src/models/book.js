const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    author: {
        type: String,
        requied: true,
        minLength: 2,
    },
    title: {
        type: String,
        required: true,
        minLength: 2,
    },
    genre: {
        type: String,
        required: true,
        minLength: 2,
    },
    pages_amount: {
        type: Number,
        required: true,
        minLength: 1,
    }
});

module.exports = mongoose.model('book', bookSchema);