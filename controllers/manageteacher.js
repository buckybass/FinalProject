const teacher = require('../models/Users')

module.exports = (req, res) => {
  teacher.find({ teacher: true }).exec((_err, doc) => {
    res.render('manageteacher', {
      user: req.user,
      teacher: doc
    })
  })
}
