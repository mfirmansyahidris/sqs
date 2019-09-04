const response = require('../res/index')
const user = require('../models').User

exports.index = function (req, res) {
    user.findAll({
        where: {id: req.body.id},
    }).then(user => {
        if(user.length > 0){
            response.ok({'user' : user[0]}, res)
        }else{
            response.notfound("user not found", res)
        }
    })
}