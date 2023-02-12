const teacher = require('../models/Users')
const category = require('../models/categorys')
module.exports = (req, res) => {
  teacher.find({ teacher: true }).exec((_err, Teachers) => {
    category.find().exec((_err, Categotys) => {
      res.render('book', {
        user: req.user,
        teachers: Teachers,
        categorys: Categotys
      })
    })
  })
}
