const mongoose = require('mongoose');

const hr = new mongoose.Schema({
    HRname:{type:"string",required:true},
    company:{type:"string",required:true},
    email:{type:"string",required:true},
    password:{type:"string",required:true},
    phone:{type:"string",required:true},
    role:{type:"string",enum:['HR'],default:'HR'}
})

console.log();
console.log();
console.log();
console.log();

