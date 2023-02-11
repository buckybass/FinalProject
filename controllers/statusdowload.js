const bookdowload = require('../models/bookDowload')

module.exports = (req, res) => {
  bookdowload.find({ bookid: req.params.id }).exec((_err, doc) => {
    res.render('statusrefer', {
      user: req.user,
      bookdowloads: doc
    })
  })
}
