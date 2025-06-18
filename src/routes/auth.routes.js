const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth.controller');
const { createUserSchema, loginUserSchema } = require('../validators/user.validator');
const validate = require('../middlewares/validate');

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication and registration
 */

// Routes with validation middleware
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 default: Test User
 *               email:
 *                 type: string
 *                 default: user@gmail.com
 *               password:
 *                 type: string
 *                 default: password
 *     responses:
 *       201:
 *         description: User created
 *       422:
 *         description: Validation error
 */
router.post('/register', validate(createUserSchema), authCtrl.register);

// Login (add Joi login schema if you like)
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in with user credentials
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 default: user@gmail.com
 *               password:
 *                 type: string
 *                 default: password
 *     responses:
 *       200:
 *         description: JWT token returned
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', validate(loginUserSchema), authCtrl.login);

module.exports = router;