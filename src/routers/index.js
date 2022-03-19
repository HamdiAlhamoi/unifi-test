const router = require('express').Router();

/*******************
 * @Router /api *
 *******************/

router.use('/todo', require('./todo'));




module.exports = router;
