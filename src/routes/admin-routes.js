const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin-controller');

router.get('/', adminController.getAllAdmin);

module.exports = router;
