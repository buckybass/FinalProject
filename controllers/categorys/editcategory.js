const category = require('../../models/categorys')
module.exports = async (req, res) => {
  await category.findOneAndUpdate({
    _id: req.params.id
  }, { $set: { name: req.body.faculty_name } })
  req.flash('success', 'แก้ไขชื่อคณะสำเร็จ')
  res.redirect('/managecategory')
}
