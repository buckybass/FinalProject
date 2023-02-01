const book = require('../models/book')

module.exports = (req, res) => {
  book.find({ approve: true }).exec((_err, doc) => {
    res.render('search', {
      user: req.user,
      book: doc
    })
  })
}
