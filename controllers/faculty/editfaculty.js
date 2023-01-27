const faculty = require('../../models/faculty')
module.exports = async (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  await faculty.findOneAndUpdate({
    _id: req.params.id
  }, { $set: { name: req.body.faculty_name } })
  req.flash('success', 'แก้ไขชื่อคณะสำเร็จ')
  res.redirect('/managefac')
}
