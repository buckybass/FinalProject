const book = require('../models/book')
const teacher = require('../models/Users')
const category = require('../models/categorys')
module.exports = async (req, res) => {
  const Keyword = req.query.keyword
  const Category = req.query.category
  const Teacher = req.query.teacher

  const where = { approve: true }
  if (Keyword || Category || Teacher) {
    where.$and = []
    where.$and.push({ approve: true })
  }
  if (Keyword) {
    where.$and.push({ bookname: { $regex: new RegExp(Keyword, 'i') } })
  }
  if (Category) {
    where.$and.push({ category: Category })
  }
  if (Teacher) {
    where.$and.push({ teacher: Teacher })
  }
  await book.find(where).exec((_err, Book) => {
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
