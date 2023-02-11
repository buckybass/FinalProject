const book = require('../models/book')

module.exports = (req, res) => {
  book.findOne({ _id: req.params.id }).exec((_err, doc) => {
    console.log(doc)
    res.render('bookdetail', {
      user: req.user,
      book: doc
    })
  })
}
