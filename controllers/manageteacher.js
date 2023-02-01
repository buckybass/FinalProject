const teacher = require('../models/teachers')

module.exports = (req, res) => {
  teacher.find().exec((_err, doc) => {
    res.render('manageteacher', {
      teacher: doc
    })
  })
}
