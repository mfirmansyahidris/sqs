module.exports = function(app){
    var controller = require('../controllers/index')
    var users = require('../controllers/users')

    app.route('/')
        .get(controller.index)
    
    app.route('/users')
        .get(users.index)
}