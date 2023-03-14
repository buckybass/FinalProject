const bookrefer = require('../models/someFileName')

module.exports = async (req, res) => {
  // JSON Parsing data to object;
  // เพราะมันเป็น String เลยต้องแปลงเป็น Object ก่อน
  const user = JSON.parse(req.body.user)
  const data = {
    userid: user._id,
    bookid: req.params.id,
    title: req.body.title_ref,
    content: req.body.content_ref,
    firstname: user.firstname,
    lastname: user.lastname,
    faculty: user.faculty,
    branch: user.branch,
    teacher: req.body.teacher,
    bookname: req.body.bookname
  }
  await bookrefer.create(data)
  req.flash('success', 'ขอสิทธิ์อ้างอิงข้อมูลสำเร็จ')
  return res.redirect(`/book/detail/${req.params.id}`)
}
