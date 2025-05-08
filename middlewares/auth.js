const jwt = require('jsonwebtoken');
const User = require('../models/User');
module.exports = role => async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ msg: 'No token' });
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(id);
    if (!user || user.role !== role) return res.status(403).json({ msg: 'Forbidden' });
    req.user = user;
    next();
  } catch {
    res.status(401).json({ msg: 'Invalid token' });
  }
};