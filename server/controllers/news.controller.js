const News = require('../models/news.model')
const Comment = require('../models/comment.model')

const find = (params, callback) => {
    News.find(params, '_id title teaser', function(err, results) {
        if (err) {
            callback(err, null);
            return
        }
        callback(null, results)
    })
}

const findById = (id, callback) => {
   News.findById(id, (err, results) => {
       if (err) {
           callback(err, null)
           return
       }
       callback(null, results)
   }) 
}

const create = (params, callback) => {
    News.create(params, function(err, results) {
        if (err) {
            return callback(err, null)  
        }
        return callback(null, results)
    })
}

const createComment = (id, username, body, callback) => {
    News.findById(id, function(err, result) {
        if (err) {
            return callback(err, null)
        }

        const comment = new Comment({username: username, body: body})

        result.comments.push(comment)

        result.save((err, commentResult) => {
            if (err) {
                return callback(err, null)
            }

            return callback(null, commentResult)
        })
    })
}

module.exports = {find, findById, create, createComment}