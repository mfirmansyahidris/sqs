const config = require('../env')

var mysql = require('mysql')
var migration = require('mysql-migrations')

var connection = mysql.createPool({
    connectionLimit : 10,
    host : config.DB_HOST,
    user : config.DB_USER,
    password : config.DB_PASSWORD,
    database : config.DB_DATABASE
})

migration.init(connection, __dirname + '');