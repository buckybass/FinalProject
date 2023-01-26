module.exports = (req, res) => {
  res.render('manage', {
    user: req.user
  })
}
