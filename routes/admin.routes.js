const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const auth = require('../middlewares/auth');
const { validateAdminCreate } = require('../middlewares/validation');

/**
 * @swagger
 * /api/admin/add-admin:
 *   post:
 *     summary: Create a new admin (admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               firstName:
 *                 type: string
 *               email:
 *                 type: string
 *               country:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin created
 *       400:
 *         description: Invalid input
 *       403:
 *         description: Forbidden
 */
router.post('/add-admin', auth('admin'), validateAdminCreate, async (req, res) => {
  const { name, firstName, email, country, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const admin = await User.create({ name, firstName, email, country, password: hashed, role: 'admin', verified: true });
  res.status(201).json({ msg: 'Admin created', admin });
});

module.exports = router;