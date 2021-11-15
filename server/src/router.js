const express = require('express');
const router = express.Router();
const { getData, addData, deleteData } = require('./controller/controller');

// Import from Controller

router.get('/', getData);
router.post('/', addData);
router.delete('/:id', deleteData);

module.exports = router;
