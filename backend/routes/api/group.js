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

router.post('/new', requireAuth, handleValidationErrors, asyncHandler(async (req, res) => {
    const ownerId = req.user.id;
    const {
        name,
        title,
        location,
        aboutUs,
        categoryId,
        groupImg,
        image1,
        image2,
        image3,
        image4,
        image5
    } = req.body;

    const group = await Group.create({
        ownerId,
        name,
        title,
        location,
        aboutUs,
        categoryId,
        groupImg,
        image1,
        image2,
        image3,
        image4,
        image5
    });

    res.json(group);
}))

module.exports = router;
