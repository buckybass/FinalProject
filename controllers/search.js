const book = require('../models/book')
const teacher = require('../models/Users')
const category = require('../models/categorys')
module.exports = async (req, res) => {
  const Keyword = req.query.keyword
  const Category = req.query.category
  const Teacher = req.query.teacher

  const response = (_err, Book) => {
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
  }

  if (Keyword || Category || Teacher) {
    if (Keyword && Category) {
      book
        .find({
          approve: true,
          $and: [
            { bookname: { $regex: new RegExp(Keyword, 'i') } },
            { category: Category }
          ]
        })
        .exec(response)
      return
    }
    if (Keyword && Teacher) {
      book
        .find({
          $and: [{ bookname: { $regex: new RegExp(Keyword, 'i') } }, { teacher: Teacher }]
        })
        .exec(response)
      return
    }
    if (Category && Teacher) {
      book
        .find({
          $and: [{ category: Category }, { teacher: Teacher }]
        })
        .exec(response)
      return
    }
    if (Keyword) {
      book
        .find({
          $and: [{ bookname: { $regex: new RegExp(Keyword, 'i') } }]
        })
        .exec(response)
      return
    }
    book
      .find({
        approve: true,
        $or: [
          // { bookname: { $regex: Keyword } },
          { category: Category },
          { teacher: Teacher }
        ]
      })
      .exec(response)
    return
  }
  book.find({ approve: true }).exec(response)
}
