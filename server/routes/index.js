const express = require('express');
const router = express.Router();
const Books = require('../models/Books');

/* GET home page. */
router.get('/api/book', (req, res, next) =>
{
  const newBook =
  {
    "author": req.body.author,
    "name": req.body.name,
    "pages": req.body.pages
  };

  // Add to the database
  Books.create(
    {
      author: newBook.author,
      name: newBook.name,
      pages: newBook.pages
    },
    (err, ok) =>
    {
      if (err) throw err
      return res.send("ok");
    }
  );
});

module.exports = router;
