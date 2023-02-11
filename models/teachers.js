const { model, Schema } = require('mongoose')

const schema = new Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: String
})

module.exports = model('Teachers', schema)
