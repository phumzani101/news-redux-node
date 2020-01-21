const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewsSchema = new Schema({
    title: String,
    teaser: String,
    body: String,
    status: {
        type: Number,
        default: 1
      }
}, {
    timestamps: true
})

module.exports = mongoose.model('News', NewsSchema)