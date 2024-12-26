require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const roleRoutes = require('./routes/roleRouter');
const jobRoutes = require('./routes/jobRoutes');
const DB = require('./config/DB');
const userrouter = require('./routes/userRouter');
const hrrouter = require('./routes/hrRouter');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/role', roleRoutes);
app.use('/jobs', jobRoutes);
app.use('/user', userrouter)
app.use("/company", hrrouter)
// Start server
const PORT = process.env.PORT || 8090;
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
    DB()
});
