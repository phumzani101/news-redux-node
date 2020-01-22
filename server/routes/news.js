const express = require('express')
const router = express.Router()
const newsCtrl = require('../controllers/news.controller')
const authCheckMiddleware = require('../middleware/authCheck')

router.get('/', function(req, res, next) {
    newsCtrl.find(req.query, (err, results) => {
        if (err) {
            console.log(err)
            return res.json({
                success: 0,
                error: err
            })
        }
        res.json({
            success: 1,
            data: results
        })
    })
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id
    
    newsCtrl.findById(id, function(err, result) {
        if (err) {
            console.log(err)
            return res.status(500).json({
                success: 0,
                error: 'No News Found' 
            })
        }

        res.json({
            success: 1,
            data: result
        })
    })
})

router.post('/', (req, res, next) => {
    newsCtrl.create(req.body, (err, result) => {
        if (err) {
            console.log(err)
            return res.json({
                success: 0,
                error: err
            })
        }

        res.json({
            success: 1,
            data: result
        })
    })
})

router.post('/:id/comment',authCheckMiddleware, (req,res,next) => {
    const id = req.params.id 

    console.log(req.userData.username)

    newsCtrl.createComment(id, req.userData.username, req.body.body, (err, result) => {
        if (err) {
            console.log(err)
            return res.json({
                success: 0,
                error: err
            })
        }

        res.json({
            success: 1,
            data: result
        })
    })
})

module.exports = router