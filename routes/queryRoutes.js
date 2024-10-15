const express = require('express');
const { postQuery } = require('../controllers/queryController');

const router = express.Router();

router.use(express.json());

router.post('/', postQuery);

module.exports = router;