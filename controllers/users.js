var response = require('../res/index')
var user = require('../models').User

exports.index = function(req, res){
    user.findAll({
        where: {id: req.body.id},
    }).then(user =>
        console.log(user[0])
    )

    // connection.query(`SELECT * FROM users WHERE id = '${req.body.id}'`, function (error, rows, fields){
    //     if(error){
    //         console.log(error)
    //         response.failed({
    //             'message' : error    
    //         }, res)
    //     }else{
    //         if(rows.length < 1){
    //             response.notfound({
    //                 'message' : 'user not found'
    //             }, res)
    //         }
    //         response.ok({
    //             'users' : rows[0]
    //         }, res)
    //     }
    // })
}