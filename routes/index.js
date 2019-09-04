module.exports = function(app){
    const controller = require('../controllers/index')
    const users = require('../controllers/users')
    const login = require('../controllers/login')
    const notFound = require('../controllers/emptyHandler')
    const middleware = require('../middleware/jwtAuthorizer')

    app.route('/')
        .get(controller.index)
    
    app.post('/users', middleware, users.index)

    app.route('/login')
        .get(login.index)

    app.use('*', notFound.index )


}