const express = require('express');
const router = express.Router();
const docsController = require('../controllers/docsController');

router.get('/', docsController.index);

module.exports = router;