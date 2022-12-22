module.exports = (req, res, next) => {
  if (!req.user) {
    req.flash('err', 'เซลชั่นหมดอายุ')
    return res.redirect('/login')
  }
  return next()
}
