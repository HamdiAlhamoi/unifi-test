const { asyncCatch } = require('../helpers');
const controller = require('../controllers/todo');
const router = require('express').Router();
 const verifyUserToken=require('../middleware/auth').verifyUserToken
/****************************
 * @Router /api/user *
 ****************************/
router.post('/', verifyUserToken, asyncCatch(controller.add));

router.patch('/:id', verifyUserToken, asyncCatch(controller.update));

router.delete('/:id',verifyUserToken,  asyncCatch(controller.remove));

router.get('/:id?',verifyUserToken,  asyncCatch(controller.get));


module.exports = router;
