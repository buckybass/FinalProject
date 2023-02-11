const teacher = require('../models/Users')
module.exports = (req, res) => {
  teacher.find({ teacher: true }).exec((_err, Teachers) => {
    res.render('book', {
      user: req.user,
      teachers: Teachers
    })
  })
}
