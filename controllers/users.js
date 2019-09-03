var response = require('../res/index')
var connection = require('../connection/index')

exports.index = function(req, res){
    connection.query('SELECT * FROM users', function (error, rows, fields){
        if(error){
            console.log(error)
            response.failed(error, res)
        }else{
            response.ok(rows, res)
        }
    })
}