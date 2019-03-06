const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

const id = '5c6a6a8979ae1a0c24bfdadc';

if(!ObjectID.isValid('5c6a6a8979ae1a0c24bfdadc')) {
    console.log('ID Not Valid');
}

// Todo.find({_id: id}).then((todos) => {
//     if(!todos.body) {
//         return console.log('Invalid ID')
//     }
//     // console.log('TODOS\n',JSON.stringify(todos, undefined, 2));
//     console.log('TODOS\n',todos);
// });

// Todo.findOne({_id: id}).then((todo) => {
//     if(!todo) {
//         return console.log('Invalid ID')
//     }
//     // console.log('TODOS\n',JSON.stringify(todos, undefined, 2));
//     console.log('\nTODO\n',todo);
// });

Todo.findById(id).then((todo) => {
    if(!todo) return console.log('TODO Not Found')
    console.log('\nTODO BY ID\n',todo);
}).catch((e) => console.log(e.message));

User.findById('5c5424a53a52bb054cd58e0b').then((user) => {
    if(!user) return console.log('\nUser Not Found');  
    console.log('\nUSER\n',JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e.message));