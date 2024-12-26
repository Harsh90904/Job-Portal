const mongoose = require('mongoose');

const hrSchema = new mongoose.Schema({
    HRname:{type:"string",required:true},
    company:{type:"string",required:true},
    email:{type:"string",required:true},
    password:{type:"string",required:true},
    phone:{type:"string",required:true},
    role:{type:"string",enum:['HR'],default:'HR'}
})

const HR = mongoose.model('hr', hrSchema);

module.exports = HR;
