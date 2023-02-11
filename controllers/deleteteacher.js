const teacher = require('../models/Users')
module.exports = async (req, res) => {
  await teacher.findOneAndDelete({ _id: req.params.id })
  req.flash('success', 'ลบอาจารย์สำเร็จ')
  res.redirect('/manageteacher')
}
