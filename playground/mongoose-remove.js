const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove ({}).then((result) => {
//   console.log(result);
// })

Todo.findOneAndRemove({_id: '5a5872d6f14d6e1400ecb6f2'}).then((todo) => {
  console.log(todo);
})
// Todo.findByIdAndRemove('5a58773c07ca7d4379609b61').then((todo) => {
//   console.log(todo);
// })
