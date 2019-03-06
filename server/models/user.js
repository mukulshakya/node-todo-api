var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        required: true,
        type: String,
        minlength: 1,
        trim: true //remove spaces from string like "  a b c " to "a b c"
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {User};