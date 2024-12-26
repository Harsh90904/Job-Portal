const mongoose = require('mongoose');
require('dotenv').config();
// Connect to MongoDB
const DB = async ()=>{
    mongoose.connect(`${process.env.DBURL}/job`)
    console.log('MongoDB connected')
};

module.exports = DB;