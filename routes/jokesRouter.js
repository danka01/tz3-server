const Router = require('express');
const jokesController = require('../Controller/jokesController');
const router = new Router();

router.get('/', jokesController.getAll);

module.exports = router;
