const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user.model')

const login = function (username, password, callback) {
    User.findOne({ username: username }, function (err, user) {
        if (err) {
            return callback(err, null)
        }

        if (!user) {
            // User not found
           return callback(err, null)
        } else {
            user.comparePassword(password, function(err, isMatch) {
                if (err) {
                    return callback(err, null)
                }

                if (isMatch) {
                    const authToken = jwt.sign({username: user.username, _id: user._id}, process.env.JWTSECRET)
                   return callback(null, authToken)
                } else {
                    return callback(err, null)
                }
            })
        }
    })
}

const register = (username, password, callback) => {
    const newUser = new User({username,password})

    newUser.save(function(err, user) {
        if (err) {
            return callback(err, null)
        }

        const authToken = jwt.sign({username: user.username, _id: user._id}, process.env.JWTSECRET)
        return callback(null, authToken)
    })
}

module.exports = {login, register}