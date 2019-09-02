module.exports = function(app){
    var controller = require('../controllers/index')

    app.route('/')
        .get(controller.index)
}