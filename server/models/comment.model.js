const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    username: String,
    body: String,
    status: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Comment', CommentSchema)