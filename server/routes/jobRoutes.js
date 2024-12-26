const express = require('express');
const { createJob, getJobs } = require('../controllers/jobController');
const { decode } = require('../middlewares/decode');

const jobrouter = express.Router();

jobrouter.post('/', decode, createJob);
jobrouter.get('/', decode, getJobs);

module.exports = jobrouter;
