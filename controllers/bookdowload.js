const bookDowload = require('../models/bookDowload')

module.exports = async (req, res) => {
  // JSON Parsing data to object;
  // เพราะมันเป็น String เลยต้องแปลงเป็น Object ก่อน
  const user = JSON.parse(req.body.user)
  console.log(req.params.id)
  console.log(req.body)
  const data = {
    userid: user._id,
    bookid: req.params.id,
    firstname: user.firstname,
    lastname: user.lastname,
    faculty: user.faculty,
    branch: user.branch,
    teacher: req.body.teacher,
    bookname: req.body.bookname
  }
  await bookDowload.create(data)
  req.flash('success', 'ดาวน์โหลดข้อมูลสำเร็จ')
  return res.redirect(`/book/${req.body.filename}`)
}
