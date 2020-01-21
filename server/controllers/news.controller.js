const News = require('../models/news.model')

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
        callback(null, results)
    })
}

module.exports = {find, findById, create}