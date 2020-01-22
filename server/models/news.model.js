const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = require('./comment.model').schema

const NewsSchema = new Schema({
    title: String,
    teaser: String,
    body: String,
    status: {
        type: Number,
        default: 1
    },
    comments: [Comment]
}, 
{
    timestamps: true
})

module.exports = mongoose.model('News', NewsSchema)