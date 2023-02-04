const express = require('express');
const router = express.Router();
const Books = require('../models/Books');

/* GET home page. */
router.post('/api/book', (req, res, next) =>
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

router.get('/api/book/:name', (req, res) =>
{
  Books.findOne({name: req.params.name}, (err, data) =>
  {
    if (err) throw err;
    if (data) return res.json(data);
  })
})

module.exports = router;
