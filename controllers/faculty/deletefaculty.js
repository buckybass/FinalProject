const faculty = require('../../models/faculty')
module.exports = async (req, res) => {
  console.log(req.params.id)
  await faculty.findOneAndDelete({ _id: req.params.id })
  req.flash('success', 'ลบคณะสำเร็จ')
  res.redirect('/managefac')
}
