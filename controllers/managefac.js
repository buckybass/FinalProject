module.exports = (req, res) => {
  res.render('managefac', {
    user: req.user
  })
}
