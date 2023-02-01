const { model, Schema, Types } = require('mongoose')

const schema = new Schema({
  userid: Types.ObjectId,
  firstname: String,
  lastname: String,
  faculty: String,
  branch: String,
  teacher: String,
  bookname: String,
  filename: String,
  filepath: String,
  approve: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

module.exports = model('Book', schema)
