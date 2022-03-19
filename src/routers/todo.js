const { asyncCatch } = require('../helpers');
const controller = require('../controllers/todo');
const router = require('express').Router();

/****************************
 * @Router /api/user *
 ****************************/
router.post('/',  asyncCatch(controller.add));

router.patch('/:id',  asyncCatch(controller.update));

router.delete('/:id',  asyncCatch(controller.remove));

router.get('/:id?',  asyncCatch(controller.get));


module.exports = router;
