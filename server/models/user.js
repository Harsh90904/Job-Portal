const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    number:{type: Number,required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    country: {type: String, required: true},
    zip: {type: Number, required: true},
    password: {type: String, required: true},
    resume: {type: String, required: true},
    skills: [{type: String}],
    jobApplications: [{type: mongoose.Schema.Types.ObjectId, ref: 'job'}]
});

const User = mongoose.model('User', user);

module.exports = User;