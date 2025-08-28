const express = require('express');
const { loginAdmin } = require('../controllers/user');
const router = express.Router();

// Login admin
router.post('/login', loginAdmin);

module.exports = router;
