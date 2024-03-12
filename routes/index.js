const Router = require('express');
const router = new Router();
const jokesRouter = require('./jokesRouter');
const catRouter = require('./catRouter');
const fullRouter = require('./fullRouter');

router.use('/jokes', jokesRouter);
router.use('/cat', catRouter);
router.use('/', fullRouter);

module.exports = router;
