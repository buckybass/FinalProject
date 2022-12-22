const { model, Schema } = require('mongoose')

const schema = new Schema({
  firstname: String,
  lastname: String,
  faculty: String,
  branch: String,
  teacher: String,
  bookname: String,
  filepath: String
}, { timestamps: true })

module.exports = model('Book', schema)
