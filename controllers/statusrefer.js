const bookrefer = require('../models/bookRefer')

module.exports = (req, res) => {
  bookrefer.find({ bookid: req.params.id }).exec((_err, doc) => {
    res.render('statusrefer', {
      user: req.user,
      bookrefers: doc
    })
  })
}
