require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const roleRoutes = require('./routes/roleRouter');
const jobRoutes = require('./routes/jobRoutes');
const DB = require('./config/DB');
const cors = require("cors")
const userrouter = require('./routes/userRouter');
const companyrouter = require('./routes/companyRouter');

const app = express();
app.use(bodyParser.json());
app.use(cors());
// Routes
app.use('/role', roleRoutes);
app.use('/jobs', jobRoutes);
app.use('/user', userrouter)
app.use("/company", companyrouter)

// Start server
const PORT = process.env.PORT || 8090;
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
    DB()
});
