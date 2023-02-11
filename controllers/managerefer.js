const book = require('../models/book')

module.exports = (req, res) => {
  book.aggregate([{ $lookup: { from: 'bookrefers', localField: '_id', foreignField: 'bookid', as: 'bookRefer' } }]).exec((_err, bookRefers) => {
    book.aggregate([{ $lookup: { from: 'bookdowloads', localField: '_id', foreignField: 'bookid', as: 'bookDowload' } }]).exec((_err, bookDowloads) => {
      res.render('managerefer', {
        user: req.user,
        bookrefers: bookRefers,
        bookdowloads: bookDowloads
      })
    })
  })
}
