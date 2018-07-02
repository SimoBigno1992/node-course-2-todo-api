//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB sever.');
  const db = client.db('TodoApp');
  /*
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("5b39ec1aecd0d4c108c96d97"
  )}, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  */

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b363ddc849531479a06c70c"
  )}, {
    $set: {
      name: 'Simone'
    },
    $inc: {
      age: 1,
    }
  }, {
      returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //client.close();
});
