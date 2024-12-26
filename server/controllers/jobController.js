const { decode } = require('../middlewares/decode');
const Job = require('../models/Job');

const createJob = async (req, res) => {
  try {
    const { title, description, company, location, salary } = req.body;

    const job = new Job({ title, description, company, location, salary });
    await job.save();
    console.log(job);
    
    res.status(201).json({ message: 'Job created successfully', job });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {createJob, getJobs}