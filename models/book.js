const { model, Schema } = require('mongoose')

const schema = new Schema({
  userid: String,
  firstname: String,
  lastname: String,
  faculty: String,
  branch: String,
  teacher: String,
  bookname: String,
  filepath: String,
  approve: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

module.exports = model('Book', schema)
