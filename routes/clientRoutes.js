const express = require('express');
const router = express.Router();
const {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient
} = require('../controllers/clientController');

// Routes
router.get('/', getAllClients);
router.get('/:id', getClientById);
router.post('/', createClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

// Swagger comments
/**
 * @swagger
 * /clients:
 *   get:
 *     summary: Get all clients
 *     responses:
 *       200:
 *         description: A list of clients
 */

/**
 * @swagger
 * /clients:
 *   post:
 *     summary: Add a new client
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - phone
 *               - age
 *               - goals
 *               - enrolledProgram
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               age:
 *                 type: integer
 *               goals:
 *                 type: string
 *               enrolledProgram:
 *                 type: string
 *     responses:
 *       201:
 *         description: Client created successfully
 */
/**
 * @swagger
 * /clients/{id}:
 *   put:
 *     summary: Update a client
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               age:
 *                 type: integer
 *               goals:
 *                 type: string
 *               enrolledProgram:
 *                 type: string
 *     responses:
 *       200:
 *         description: Client updated successfully
 */

/**
 * @swagger
 * /clients/{id}:
 *   delete:
 *     summary: Delete a client
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Client deleted successfully
 */



