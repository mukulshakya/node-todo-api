var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://heroku_x3h7btp3:t8lcq6ptfgn2v2qdahflssnndp@ds161285.mlab.com:61285/heroku_x3h7btp3' || 'mongodb://localhost:27017/NodeTodoApp', { useNewUrlParser: true });

module.exports = {mongoose};