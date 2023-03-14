const { model, Schema, Types } = require('mongoose')

const schema = new Schema({
  userid: Types.ObjectId,
  bookid: Types.ObjectId,
  title: String,
  content: String,
  firstname: String,
  lastname: String,
  faculty: String,
  branch: String,
  teacher: String,
  bookname: String
}, { timestamps: true })

module.exports = model('BookRefer', schema)
