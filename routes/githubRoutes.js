const express = require('express');
const router = express.Router();
const githubController = require('../controllers/githubController');

router.post('/github', githubController.handleWebhook);

module.exports = router;
