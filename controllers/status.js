module.exports = (req, res) => {
  res.render('status', {
    user: req.user
  })
}
