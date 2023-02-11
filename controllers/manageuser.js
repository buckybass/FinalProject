const Users = require('../models/Users')

module.exports = (req, res) => {
  Users.find({ $and: [{ admin: false }, { teacher: false }] }).exec((_err, doc) => {
    res.render('manageuser', {
      user: req.user,
      User: doc
    })
  })
}
