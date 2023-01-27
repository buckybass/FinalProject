const faculty = require('../../models/faculty')

module.exports = (req, res) => {
  faculty.find().exec((_err, doc) => {
    res.render('managefac', {
      faculty: doc
    })
  })
}
