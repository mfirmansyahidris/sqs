'use strict'
exports.ok = function(value, res){
    var data = {
        'status' : 200,
        'value' : value
    }
    res.status(200)
    res.json(data)
    res.end()
}

exports.failed = function(value, res){
    var data = {
        'status' : 500,
        'value' : value
    }
    res.status(500)
    res.json(data)
    res.end()
}

exports.notfound = function(value, res){
    var data = {
        'status' : 404,
        'value' : value
    }
    res.status(404)
    res.json(data)
    res.end()
}