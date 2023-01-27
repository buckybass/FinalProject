module.exports = (req, res) => {
  res.render('manageuser', {
    user: req.user
  })
}
