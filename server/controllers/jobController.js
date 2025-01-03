const Job = require("../models/Job");

const getjob = async (req, res) => {
  try {
    let job = await Job.find();
    console.log(job);

    res.send(job);
  } catch (error) {
    res.send({ message: error });
  }
};
const createjob = async (req, res) => {
  req.body.user = req.user.id;
  console.log(req.body);
  try {
    let job = await Job.create(req.body);
    res.send(job);
  } catch (error) {
    res.send({ message: error });
  }
};
const getjobById = async (req, res) => {
  try {
    let { jobid } = req.params;
    let job = await Job.findById(jobid);
    res.send(job);
  } catch (error) {
    res.send({ message: error });
  }
};
const upadatejob = async (req, res) => {
  try {
    const { jobid } = req.params;
    let job = await Job.findByIdAndUpdate(jobid, req.body, {
      new: true,
    });
    res.send(job);
  } catch (error) {
    res.send({ message: error });
  }
};
const deletejob = async (req, res) => {
  try {
    const { jobid } = req.params;
    let job = await Job.findByIdAndDelete(jobid);
    res.send(job);
  } catch (error) {
    res.send({ error: error });
  }
};

module.exports = {
  getjob,
  createjob,
  getjobById,
  upadatejob,
  deletejob,
};
