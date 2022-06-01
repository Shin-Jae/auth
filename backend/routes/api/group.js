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
}));

router.put('/:id', requireAuth, handleValidationErrors, asyncHandler(async (req, res) => {
    const groupId = parseInt(req.params.id, 10);
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

    const group = await Group.findByPk(groupId);

    group.name = name;
    group.title = title;
    group.location = location;
    group.aboutUs = aboutUs;
    group.categoryId = categoryId;
    group.groupImg = groupImg;
    group.image1 = image1;
    group.image2 = image2;
    group.image3 = image3;
    group.image4 = image4;
    group.image5 = image5;

    await group.save();
    res.json(group);
}))

module.exports = router;
