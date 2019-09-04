const response = require('../res/index')

exports.index = function (req, res) {
    response.notfound({
        'message' : `method ${req.method} is not allowed from this endpoint`
    }, res)
}