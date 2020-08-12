const express = require('express');
const { asyncHandler, handleValidationErrors } = require('../utils');
const { getUserToken } = require('../utils/auth');
const csrfProtection = require('csurf')({ cookie: true });

const db = require('../../db/models');
const { Article, User, Category } = db;

const { check } = require('express-validator');


const router = express.Router();


const validateStory = [
  check('title')
    .exists()
    .withMessage("Title must not be empty"),
  check('title')
    .isLength({ min: 1, max: 255 })
    .withMessage("Must have a unique title between 1 and 255 characters"),
  check('text')
    .exists()
    .withMessage("Text field must not be empty"),
  handleValidationErrors,
]


router.get('/', asyncHandler(async (req, res) => {
  const stories = await Article.findAll({
    include: [{
      model: User,
      attributes: ['username'],
    },
    {
      model: Category,
      attributes: ['name'],
    }],
    order: [['createdAt', 'DESC']],
  });

  res.json({ stories });
}));

router.post('/', validateStory, asyncHandler(async (req, res) => {
  const { title, text, category } = req.body;
  const authorId = req.user.id;

  const newStory = await Article.create({ title, text, category, authorId });
  const story = await Article.findByPk(newStory.id, {
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  });

  res.json({ story });
}));


module.exports = router;
