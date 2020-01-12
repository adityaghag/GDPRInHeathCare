const express = require('express');
const router = express.Router();
const Lab = require("../models/lab");

router.post('/pdf',Lab.getLabReport);

module.exports = router;