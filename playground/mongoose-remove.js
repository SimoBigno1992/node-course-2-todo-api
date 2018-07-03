const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5b3b33c4ecd0d4c108c982e5'}).then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove('5b3b33c4ecd0d4c108c982e5').then((todo) => {
//   console.log(todo);
// });
