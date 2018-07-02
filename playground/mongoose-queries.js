const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b3a3aae34a3e45f150635cb1';
//
// if(!ObjectID.isValid(id)){
//   console.log('Id not valid.');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var id = '5b3a1bd6abfc07574f34090d';

if(!ObjectID.isValid(id)){
   console.log('Id not valid.');
}

User.findById(id).then((user) => {
  if(!user){
    return console.log('Id not found.');
  }
  console.log('User by Id', user);
}).catch((e) => console.log(e));
