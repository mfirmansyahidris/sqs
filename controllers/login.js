var response = require('../res/index')
var connection = require('../connection/index')
var jwt = require('jsonwebtoken')
var fs = require('fs') 

exports.index = function(req, res){
    console.log(req.body)
    connection.query(`SELECT * FROM users WHERE id = '${req.body.id}'`, function (error, rows, fields){
        if(error){
            console.log(error)
            response.failed(error, res)
        }else{
            if(rows.length < 1){
                response.notfound("id or password incorrect", res)
            }else{
                let privateKey = fs.readFileSync('./private.pem', 'utf8')
                let token = jwt.sign({ "body": "stuff" }, privateKey, { algorithm: 'HS256'})

                response.ok({
                    'user' : rows[0],
                    'token' : `jwt ${token}`
                }, res)
            }
        }
    })
}