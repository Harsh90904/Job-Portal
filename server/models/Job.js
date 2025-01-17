const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: Number },
  email: { type: String, required: true },
  number: { type: Number, required: true },
  postedAt: { type: Date, default: Date.now },
  user:{type:mongoose.Types.ObjectId , ref:"user"}
});

const Job= mongoose.model('Job', jobSchema);

module.exports = Job;