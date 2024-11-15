const express = require('express');
const router = express.Router();
const halamanutamacontroller = require('../controller/halamanutama.js')

// Get All halamanutamacontroller
router.get('/', halamanutamacontroller.get_all)
module.exports = router