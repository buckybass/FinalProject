module.exports = (req, res) => {
  res.render('managebook', {
    user: req.user
  })
}
