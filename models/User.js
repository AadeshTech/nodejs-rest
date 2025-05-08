const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  firstName: String,
  email: { type: String, unique: true },
  country: String,
  password: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  verified: { type: Boolean, default: false },
});
module.exports = mongoose.model('User', UserSchema);