const { model, Schema } = require('mongoose')

const schema = new Schema({
  firstname: String,
  lastname: String
})

module.exports = model('Teachers', schema)
