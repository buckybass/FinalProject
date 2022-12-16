const { model, Schema } = require('mongoose')

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  firstname: String,
  lastname: String,
  phonenumber: Number,
  faculty: String,
  branch: String,
  avatarUrl: String,
  oauth: {
    facebook: String,
    google: String
  }
}, { timestamps: true })

module.exports = model('Users', schema)
