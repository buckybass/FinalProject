module.exports = (req, res) => {
  res.render('book', {
    user: req.user
  })
}
