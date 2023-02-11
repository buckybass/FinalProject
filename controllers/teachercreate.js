const teachers = require('../models/Users')
const bcrypt = require('bcrypt')
module.exports = async (req, res) => {
  const redirectWithError = (msg, url) => {
    req.flash('err', msg)
    return res.redirect(url)
  }
  const user = await teachers.findOne({ email: req.body.email })
  if (user) {
    return redirectWithError('อีเมลนี้มีการสมัครแล้ว', '/manageteacher')
  }
  try {
    req.body.oldpassword = req.body.password
    req.body.password = await bcrypt.hash(req.body.password, 10)
    req.body.teacher = true
    await teachers.create(req.body)
  } catch (error) {
    redirectWithError(error.message || 'พบปัญหาบางอย่าง', '/manageteacher')
  }
  req.flash('success', 'เพิ่มอาจารย์สำเร็จ')
  return res.redirect('/manageteacher')
  // const data = req.body
  // data.teacher = true
  // await teachers.create(data)
  // req.flash('success', 'เพิ่มอาจารย์สำเร็จ')
  // return res.redirect('/manageteacher')
}
