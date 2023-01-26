module.exports = (req, res, next) => {
  if (!req.user) {
    req.flash('err', 'กรุณาเข้าสู่ระบบ')
    return res.redirect('/login')
  }
  return next()
}
