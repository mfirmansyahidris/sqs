const dotenv = require('dotenv')
dotenv.config()
const port = process.env.SERVER_PORT

const express = require('express')
const app = express()

const bodyparser = require('body-parser')
const controller = require('../sqs/controllers/index')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

var routes = require('../sqs/routes/index')
routes(app)

app.listen(port)
console.log(`sqs run in port ${port}`)