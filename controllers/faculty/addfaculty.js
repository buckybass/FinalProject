const faculty = require('../../models/faculty')

module.exports = async (req, res) => {
  const data = req.body.faculty_name
  console.log(data)
  await faculty.create({ name: data })
  req.flash('success', 'เพิ่มคณะสำเร็จ')
  return res.redirect('/managefac')
}
