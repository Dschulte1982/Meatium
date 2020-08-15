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

router.get('/:id(\\d+)', asyncHandler( async (req, res, next) => {
  const story = await Article.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ['username'],
      },
      {
        model: Category,
        attributes: ['name'],
      },
    ],
  });

  if (!story) {
    const err = new Error('Story not found');
    err.status = 404;
    next(err);
    return;
  }
  res.json({ story });
}))

router.post('/', csrfProtection, validateStory, asyncHandler(async (req, res) => {
  const { title, text, categoryId } = req.body;
  const authorId = req.user.id;

  const newStory = await Article.create({ title, text, categoryId, authorId });
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

router.delete('/:id(\\d+)', asyncHandler( async (req, res) => {
  const story = await Article.findByPk(req.params.id);

  if (!story) {
    const err = new Error('Story not found');
    err.status = 404;
    next(err);
    return;
  }

  await story.destroy();
  res.json({ message: `Story "${story.title} successfully deleted` });
}));


module.exports = router;
