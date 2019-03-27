const express = require('express')
const router = express.Router()
const controller = require('../cotroller/index')
router.get('/',controller.main)
router.post('/index',controller.index)
module.exports = router