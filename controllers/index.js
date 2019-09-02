var response = require('../res/index')

exports.index = function(req, res){
    response.ok("wiiw, server is online", res)
}