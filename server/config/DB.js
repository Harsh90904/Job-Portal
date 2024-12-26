const mongoose = require('mongoose');
require('dotenv').config();
// Connect to MongoDB
const DB = async ()=>{
    mongoose.connect("mongodb://localhost:27017/JOB")
    console.log('MongoDB connected')
};

module.exports = DB;