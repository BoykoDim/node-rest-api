var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://batboy4e:admin@ds251747.mlab.com:51747/node-rest-api-course-2018' || 'mongodb://localhost:27017/TodoApp');
module.exports= {mongoose};
