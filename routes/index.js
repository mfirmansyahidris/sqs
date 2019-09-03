module.exports = function(app){
    const controller = require('../controllers/index')
    const users = require('../controllers/users')
    const login = require('../controllers/login')
    const middleware = require('../middleware/jwtAuthorizer')

    app.route('/')
        .get(controller.index)
    
    app.get('/users', middleware, users.index)

    app.route('/login')
        .get(login.index)
}