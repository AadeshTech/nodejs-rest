const express = require('express');
const router = express.Router();
const { register, verifyEmail } = require('../controllers/auth.controller');
const { validateRegister } = require('../middlewares/validation');
const { login } = require('../controllers/auth.controller');

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
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
 *         description: User registered
 *       400:
 *         description: Invalid input
 */
router.post('/register', validateRegister, register);

/**
 * @swagger
 * /api/auth/verify-email/{token}:
 *   get:
 *     summary: Verify email using token
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Email verified
 *       400:
 *         description: Invalid token
 */
router.get('/verify-email/:token', verifyEmail);


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in a verified user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: JWT token returned
 *       400:
 *         description: Invalid credentials
 *       403:
 *         description: Email not verified
 */
router.post('/login', login);

module.exports = router;