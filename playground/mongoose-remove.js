const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.deleteMany({})
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

// Todo.findByIdAndDelete('5c7f69077648c0e7108f7c81')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));
