const express = require('express');
const router = express.Router();
const peta = require('../controller/peta.js')

// Get All halamanutamacontroller
router.get('/', peta.get_all)
module.exports = router