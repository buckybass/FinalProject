const bookDowload = require('../models/bookDowload')

module.exports = (req, res) => {
  bookDowload.find().exec((_err, doc) => {
    res.render('managedowload', {
      user: req.user,
      bookdowloads: doc
    })
  })
}
