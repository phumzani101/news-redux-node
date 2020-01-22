const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

module.exports = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).end()
    }

    const token = req.headers.authorization.split(' ')[1]

    return jwt.verify(token, process.env.JWTSECRET, (err, decode) => {
        if (err) {
            return res.status(401).end()
        }

        req.userData = {}
        req.userData.tokenID = token;
        req.userData.userid = decode._id
        req.userData.username = decode.username

        return next()
    })
}