const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country:{ type: String, required:true},
  company:{ type: String},
  role: { type: String, enum: ['User', 'HR', 'Admin', 'CEO'], default: 'User' },
});

const role = mongoose.model('role', roleSchema);

module.exports = role;
