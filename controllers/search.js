const book = require('../models/book')
const teacher = require('../models/Users')
const category = require('../models/categorys')
module.exports = async (req, res) => {
  const Keyword = req.query.keyword
  const Category = req.query.category
  const Teacher = req.query.teacher
  if (Keyword || Category || Teacher) {
    console.log(Keyword)
    book.find({ $or: [{ bookname: Keyword }, { category: Category }, { teacher: Teacher }] }).exec((_err, Book) => {
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
    return
  }
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
