const {ObjectID} = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/user');

var app = express();

const port = process.env.PORT || 3000
// const port = process.env.OPENSHIFT_NODEJS_PORT || 3000

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }).catch((err) => {
        res.status(400).send(err);
    });

});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }).catch((err) => {
        res.status(400).send(err);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id; //id = :id

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todos) => {
        if(!todos) return res.status(404).send();

        res.send({todos});
    }).catch((err) => res.status(400).send());

});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) return res.status(404).send();

    Todo.findByIdAndDelete(id).then((todos) => {
        if(!todos) return res.status(404).send();

        res.send({todos});
    }).catch((err) => res.status(400).send());
})

app.listen(port, () => console.log(`Starting on Port ${port}`));

module.exports = {app};