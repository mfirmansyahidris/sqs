const response = require('../res/index')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const user = require('../models').User

exports.index = function(req, res){
    console.log(req.body)
    user.findAll({
        where: {id: req.body.id},
    }).then(user => {
        if(user.length > 0){
            let privateKey = fs.readFileSync('./private.pem', 'utf8')
            let token = jwt.sign({ "body": "stuff" }, privateKey, { algorithm: 'HS256'})
            response.ok({
                'user' : user[0],
                'token' : `jwt ${token}`
            }, res)
        }else{
            response.notfound("id or password incorrect", res)
        }
    })
}