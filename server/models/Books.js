const mongoose = require("mongoose");

const Books = mongoose.Schema;

let bookSchema = new Books ({
    author: {type: String},
    name: {type: String},
    pages: {type: Number}

});

module.exports = mongoose.model("books", bookSchema);