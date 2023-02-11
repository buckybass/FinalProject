const book = require('../models/book')
module.exports = async (req, res) => {
  await book.findOneAndUpdate({
    _id: req.params.id
  }, { $set: { approve: true } })
  req.flash('success', 'อนุมัติสำเร็จ')
  res.redirect('/manageapprove')
}
