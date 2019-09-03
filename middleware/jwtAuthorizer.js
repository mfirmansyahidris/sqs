const jwt = require('jsonwebtoken')
const fs = require('fs')
const response = require('../res/index')

module.exports = function isAuthorized(req, res, next){
    if (typeof req.headers.authorization !== 'undefined'){
        let token  = req.headers.authorization.split(" ")[1]
        let privateKey = fs.readFileSync('./private.pem', 'utf8')
        jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {
            if(err){
                response.notfound({
                    'message' : 'access not authorized'
                }, res)
                throw new Error("access not authorized")
            }
            return next()
        })
    }else{
        response.notfound({
            'message' : 'access not authorized'
        }, res)
        throw new Error("access not authorized")
    }
}