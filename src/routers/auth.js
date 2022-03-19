const { asyncCatch } = require('../helpers');
const controller = require('../controllers/auth');
const router = require('express').Router();

/****************************
 * @Router /api/user *
 ****************************/
router.post('/',  asyncCatch(controller.login));



module.exports = router;
