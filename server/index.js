require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/roleRouter');
const jobRoutes = require('./routes/jobRoutes');
const DB = require('./config/DB');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/user', userRoutes);
app.use('/jobs', jobRoutes);

// Start server
const PORT = process.env.PORT || 8090;
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
    DB()
});
