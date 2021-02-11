const router = require('express').Router();
const { createStreet, createHouse, getStreets } = require('../controllers');

router.get('/street', getStreets);
router.post('/street', createStreet);
router.post('/house', createHouse);

module.exports = router;
