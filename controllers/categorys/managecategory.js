const category = require('../../models/categorys')

module.exports = (req, res) => {
  category.find().exec((_err, doc) => {
    res.render('managecategory', {
      user: req.user,
      faculty: doc
    })
  })
}
