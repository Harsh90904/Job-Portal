const express = require('express');
const { getjob,createjob,getjobById,upadatejob,deletejob } = require('../controllers/jobController');
const { decode } = require('../middlewares/decode');

const jobrouter = express.Router();

jobrouter.get('/:id', decode, getjobById);
jobrouter.get('/', decode, getjob);
jobrouter.post('/', decode, createjob);
jobrouter.patch('/:id', decode, upadatejob);
jobrouter.delete('/:id', decode, deletejob);

module.exports = jobrouter;
