const teachers = require('../models/teachers')

module.exports = async (req, res) => {
  const data = req.body
  await teachers.create(data)
  req.flash('success', 'เพิ่มอาจารย์สำเร็จ')
  return res.redirect('/manageteacher')
}
