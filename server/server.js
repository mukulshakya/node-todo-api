const {ObjectID} = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/user');

var app = express();

const port = process.env.PORT || 3000
// const port = process.env.OPENSHIFT_NODEJS_PORT || 3000

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('App Working Fine\n\nOther Routes Available\n* GET /todos\n* GET /todos/:id\n* POST /todos\n* DELETE /todos/:id');
})

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
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', "completed"]);

    if(!ObjectID.isValid(id)) return res.status(404).send();

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    }
    else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findOneAndUpdate({_id: id}, {$set: body}, {new: true}).then((todo) => {
        if(!todo) return res.status(404).send();

        res.send({todo});
    }).catch(err => res.status(400).send());
});

app.listen(port, () => console.log(`Starting on Port ${port}`));

module.exports = {app};