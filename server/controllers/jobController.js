const { decode } = require('../middlewares/decode');
const Job = require('../models/Job');

const createJob = async (req, res) => {
  try {
    const { title, description, company, location, salary } = req.body;

    const job = new Job({ title, description, company, location, salary });
    await job.save();
    console.log(job);
    
    res.status(201).send({ message: 'Job created successfully', job });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.status(200).send(jobs);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
module.exports = {createJob,getJobs}