var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var mongoUrlHeroku = 'mongodb://batboy4e:admin@ds251747.mlab.com:51747/node-rest-api-course-2018';
var mongoUrlLocal = 'mongodb://localhost:27017/TodoApp';
mongoose.connect(mongoUrlLocal);
module.exports= {mongoose};
