const express = require('express')
const router = express.Router()
const authCtrl = require('../controllers/auth.controller')

router.post('/:username', (req, res, next) => {
    const {username, password} = req.body
    authCtrl.login(username, password, (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({
                success: 0,
                error: err
            })
        }

        if (result) {
            return res.status(200).json({
                success: 1,
                data: {tokenID: result, username: req.body.username}
            })
        } else {
            return res.status(401).json({
                success: 0,
                data: result
            })
        }
    })
})


router.post('/', function(req, res, next) {
    authCtrl.register(req.body.username, req.body.password, function(err, result){
        if(err){  
            console.log(err);
            res.status(500).json({
                success: 0,
                error: err
            })
            return;
        }
        if(result){
            res.status(200).json({
                success: 1,
                data: {tokenID: result, username: req.body.username}
            });
        }else{
            res.status(401).json({
                success: 0,
                data: result
            });
        }
    });

});

module.exports = router