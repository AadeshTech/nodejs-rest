const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

/**
 * @swagger
 * /api/user/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile returned
 *       401:
 *         description: Unauthorized
 */
router.get('/profile', auth('user'), (req, res) => {
  res.json({ msg: 'User profile', user: req.user });
});

module.exports = router;