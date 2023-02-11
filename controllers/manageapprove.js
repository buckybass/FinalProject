const book = require('../models/book')

module.exports = (req, res) => {
  book.find({ teacher: req.user.firstname }).exec((_err, doc) => {
    res.render('manageapprove', {
      user: req.user,
      books: doc
    })
  })
}
