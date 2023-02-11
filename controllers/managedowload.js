const book = require('../models/book')

module.exports = (req, res) => {
  book.aggregate([{ $lookup: { from: 'bookdowloads', localField: '_id', foreignField: 'bookid', as: 'bookDowload' } }]).exec((_err, doc) => {
    res.render('managedowload', {
      user: req.user,
      bookdowloads: doc
    })
  })
}
