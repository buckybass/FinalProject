const Users = require('../models/Users')

module.exports = (req, res) => {
  Users.find().exec((_err, doc) => {
    res.render('manageuser', {
      user: req.user,
      User: doc
    })
  })
}
