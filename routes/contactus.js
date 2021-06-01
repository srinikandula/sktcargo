const express = require('express');
const { contactus } = require('../controllers/controller');


const router = express.Router();

router.post('/', contactus);


module.exports = router;