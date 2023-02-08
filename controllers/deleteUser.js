const user = require('../models/Users')
module.exports = async (req, res) => {
  await user.findOneAndDelete({ _id: req.params.id })
  req.flash('success', 'ลบสมาชิกสำเร็จ')
  res.redirect('/manageuser')
}
