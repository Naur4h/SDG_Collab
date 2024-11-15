const express = require('express');
const router = express.Router();
const kalkulatorrouters = require('../controller/kalkulator.js')

// Get All halamanutamacontroller
router.put('/', kalkulatorrouters.calculate_data)
module.exports = router