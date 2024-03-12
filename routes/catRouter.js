const Router = require('express');
const catController = require('../Controller/catController');
const router = new Router();

router.get('/', catController.getCat);

module.exports = router;
