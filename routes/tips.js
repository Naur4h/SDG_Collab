const express = require('express');
const router = express.Router();
const tips = require('../controller/tips.js')

// Get All halamanutamacontroller
router.get('/', tips.get_all)
module.exports = router