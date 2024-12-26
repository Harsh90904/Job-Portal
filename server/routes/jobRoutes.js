const express = require('express');
const { createJob, getJobs } = require('../controllers/jobController');
const { decode } = require('../middlewares/decode');

const router = express.Router();

router.post('/', decode, createJob);
router.get('/', decode, getJobs);

module.exports = router;
