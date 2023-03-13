const book = require('../models/book')
const bookrefer = require('../models/bookRefer')
const bookdowload = require('../models/bookDowload')

module.exports = (req, res) => {
  book.find({ userid: req.user.id }).exec((_err, Books) => {
    if (Books[0]) {
      bookrefer.countDocuments({ bookid: Books[0]._id }).exec((_err, CountRefer) => {
        bookdowload.countDocuments({ bookid: Books[0]._id }).exec((_err, CountDowload) => {
          res.render('status', {
            user: req.user,
            books: Books,
            countrefer: CountRefer,
            countdowload: CountDowload
          })
        })
      })
    } else {
      res.render('status', {
        user: req.user,
        books: Books
      })
    }
  })
}
