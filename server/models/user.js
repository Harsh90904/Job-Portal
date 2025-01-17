const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {type: String, },
    email: {type: String, },
    number:{type: Number,},
    city: {type: String, },
    state: {type: String, },
    country: {type: String, },
    zip: {type: Number, },
    password: {type: String, },
    resume: {type: String, },
    skills: [{type: String}],
    Education: {type: String, },
    university: {type: String, },
    experience: [{type: String}],
    github: {type: String},
    linkedin: {type: String},
    
    jobApplications: [{type: mongoose.Schema.Types.ObjectId, ref: 'job'}]
});

const User = mongoose.model('User', user);

module.exports = User;