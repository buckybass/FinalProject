const bookrefer = require('../models/bookrefer')

module.exports = (req, res) => {
  bookrefer.find().exec((_err, doc) => {
    res.render('managerefer', {
      user: req.user,
      bookrefers: doc
    })
  })
}
