var mysql = require('mysql')
const config = require('../env')

var conn = mysql.createConnection({
    host : config.DB_HOST,
    user : config.DB_USER,
    password : config.DB_PASSWORD,
    database : config.DB_DATABASE
})

conn.connect(function(err){
    if (err) throw err
})

module.exports = conn