const model = require('./models').User

model.findAll().then(user =>
    console.log(user)
)
