const book = require('../models/book')

module.exports = (req, res) => {
  book.find().exec((_err, doc) => {
    res.render('managebook', {
      book: doc
    })
  })
}
