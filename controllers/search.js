const book = require('../models/book')
const teacher = require('../models/Users')
const category = require('../models/categorys')
module.exports = (req, res) => {
  book.find({ approve: true }).exec((_err, Book) => {
    teacher.find({ teacher: true }).exec((_err, Teachers) => {
      category.find().exec((_err, Categotys) => {
        res.render('search', {
          user: req.user,
          book: Book,
          teachers: Teachers,
          categorys: Categotys
        })
      })
    })
  })
}
