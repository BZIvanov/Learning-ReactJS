const router = require('express').Router();
const { uploadFiles } = require('./files.controller');

router.post('/upload', uploadFiles);

module.exports = router;
