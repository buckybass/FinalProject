const book = require('../models/book')
// const Users = require('../models/Users')

module.exports = async (req, res) => {
  // JSON Parsing data to object;
  // เพราะมันเป็น String เลยต้องแปลงเป็น Object ก่อน
  const user = JSON.parse(req.body.user)
  const data = {
    userid: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    faculty: user.faculty,
    branch: user.branch,
    teacher: req.body.teacher,
    bookname: req.file.filename,
    filepath: req.file.path
  }
  // await Users.findOneAndUpdate({ _id: user._id }, { havebook: true })
  await book.create(data)
  req.flash('success', 'ลงทะเบียนสำเร็จ')
  return res.redirect('/')
}
