const category = require('../../models/categorys')
module.exports = async (req, res) => {
  await category.findOneAndDelete({ _id: req.params.id })
  req.flash('success', 'ลบคณะสำเร็จ')
  res.redirect('/managecategory')
}
