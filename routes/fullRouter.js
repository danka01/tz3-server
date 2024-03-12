const Router = require('express');
const fullController = require('../Controller/fullController');
const router = new Router();

router.get('/', fullController.getAll);

module.exports = router;
