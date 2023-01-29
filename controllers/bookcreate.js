const book = require('../models/book')

module.exports = async (req, res) => {
  // JSON Parsing data to object;
  // เพราะมันเป็น String เลยต้องแปลงเป็น Object ก่อน
  const user = JSON.parse(req.body.user)
  console.log()
  const data = {
    userid: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    faculty: user.faculty,
    branch: user.branch,
    teacher: req.body.teacher,
    bookname: req.body.bookname,
    filename: req.file.filename,
    filepath: req.file.path
  }
  await book.create(data)
  req.flash('success', 'ลงทะเบียนสำเร็จ')
  return res.redirect('/')
}
