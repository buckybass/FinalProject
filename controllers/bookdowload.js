const bookDowload = require('../models/bookDowload')
const path = require('path')
module.exports = async (req, res) => {
  const filePath = path.join(__dirname, '../public/book', req.body.filename)
  console.log(filePath)
  const fileName = req.body.filename
  // JSON Parsing data to object;
  // เพราะมันเป็น String เลยต้องแปลงเป็น Object ก่อน
  const user = JSON.parse(req.body.user)
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
  return res.download(filePath, fileName)
}
