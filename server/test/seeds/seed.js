const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const todos = [{
  _id: new ObjectID(),
  text: 'Fist test to do'
}, {
  _id: new ObjectID(),
  text: 'Second test to do',
  completed: true,
  completedAt: 333
}];

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
  _id: userOneId,
  email: 'simone@bignotti.it',
  password: 'userOnePass',
  tokens: [{
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString(),
    access: 'auth'
  }]
}, {
  _id: userTwoId,
  email: 'valentina@rossini.it',
  password: 'userTwoPass',
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

module.exports = {todos, populateTodos, populateUsers, users};
