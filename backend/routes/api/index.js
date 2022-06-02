const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const groupsRouter = require('./group.js');
const reviewsRouter = require('./review.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/group', groupsRouter);

router.use('/review', reviewsRouter);

module.exports = router;
