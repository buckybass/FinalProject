// const book = require("../models/book")

module.exports = async (req, res) => {
  const user = req.body.user
  console.log(user.password)
  // console.log(req.file)
  // const data = {
  //   firstname: req.body.user.firstname,
  //   lastname: req.body.user.lastname,
  //   faculty: req.body.user.faculty,
  //   branch: req.body.user.branch,
  //   teacher: req.body.teacher,
  //   bookname: req.file.filename,
  //   filepath: req.file.path
  // }
  // console.log(data)
  // book.create()
  req.flash('success', 'ลงทะเบียนสำเร็จ')
  return res.redirect('/')
}
