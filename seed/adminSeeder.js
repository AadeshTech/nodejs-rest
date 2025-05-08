const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

dotenv.config();

async function seedAdmin() {
  await mongoose.connect(process.env.MONGO_URI);
  const existing = await User.findOne({ email: 'admin@example.com' });
  if (!existing) {
    const hashed = await bcrypt.hash('admin123', 10);
    await User.create({
      name: 'Admin',
      firstName: 'Super',
      email: 'admin@example.com',
      country: 'Global',
      password: hashed,
      role: 'admin',
      verified: true
    });
    console.log('Default admin created');
  } else {
    console.log('Admin already exists');
  }
  mongoose.disconnect();
}
seedAdmin();
