const category = require('../../models/categorys')

module.exports = async (req, res) => {
  const data = req.body.faculty_name
  console.log(data)
  await category.create({ name: data })
  req.flash('success', 'เพิ่มคณะสำเร็จ')
  return res.redirect('/managecategory')
}
