const express = require('express');
const { bookshipment } = require('../controllers/controller');


const router = express.Router();

router.post('/', bookshipment);


module.exports = router;