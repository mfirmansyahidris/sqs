var response = require('../res/index')
var connection = require('../connection/index')

exports.index = function(req, res){
    connection.query(`SELECT * FROM users WHERE id = '${req.body.id}'`, function (error, rows, fields){
        if(error){
            console.log(error)
            response.failed({
                'message' : error    
            }, res)
        }else{
            if(rows.length < 1){
                response.notfound({
                    'message' : 'user not found'
                }, res)
            }
            response.ok({
                'users' : rows[0]
            }, res)
        }
    })
}