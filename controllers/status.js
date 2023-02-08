const book = require('../models/book')

module.exports = (req, res) => {
  book.find({ userid: req.user.id }).exec((_err, doc) => {
    console.log(req.user.id)
    res.render('status', {
      user: req.user,
      books: doc
    })
  })
}
