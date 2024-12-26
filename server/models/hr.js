const mongoose = require('mongoose');

const hrSchema = new mongoose.Schema({
    HRname:{type:"string",required:true},
    company:{type:"string",required:true},
    email:{type:"string",required:true},
    password:{type:"string",required:true},
    phone:{type:"string",required:true},
    stasus:{type:"string"}
})

const HR = mongoose.model('HR', hrSchema);

module.exports = HR
