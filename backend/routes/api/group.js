const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Group, Review, Category } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const groups = await Group.findAll({ include: [{ model: Review }] });

    res.json(groups);
}));

module.exports = router;
