const express = require('express')
const app = express()

const bodyparser = require('body-parser')
const controller = require('../sqs/controllers/index')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

var routes = require('../sqs/routes/index')
routes(app)

app.listen(3000)
console.log(`sqs run in port 3000`)