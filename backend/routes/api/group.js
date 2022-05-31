const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Group, Review, Category, User } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const groups = await Group.findAll({ include: [{ model: Review }] });

    res.json(groups);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const groupId = parseInt(req.params.id, 10);

    const groups = await Group.findByPk(groupId,
        { include: [{ model: Review, include: [{ model: User }] }, { model: User }] });

    res.json(groups);
}));

module.exports = router;
