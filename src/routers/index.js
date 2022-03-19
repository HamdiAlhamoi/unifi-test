const router = require('express').Router();

/*******************
 * @Router /api *
 *******************/

router.use('/todo', require('./todo'));

router.use('/auth', require('./auth'));




module.exports = router;
