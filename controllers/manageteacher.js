module.exports = (req, res) => {
  res.render('manageteacher', {
    user: req.user
  })
}
