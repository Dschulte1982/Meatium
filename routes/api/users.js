const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { check, validatePassword } = require('express-validator');
const { getUserToken } = require('../utils/auth')

const { secret, expiresIn } = require('../../config').jwtConfig;
const db = require('../../db/models');
const { User } = db;
const { asyncHandler } = require('../utils');

const router = express.Router();

const signUpValidations = [

]


router.post('/', (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.create({
    username,
    password,
    email
  })

  const token = await jwt.sign(
    { id: user.id, username: user.username },
    secret,
    { expiresIn }
  );
})

router.post('/token', asyncHandler( async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: {
      [Op.or]: [
        { username },
        { email: username },
      ]
    }
  });



  if (!user || !user.validatePassword(password)) {
    const err = new Error('Invalid username/password');
    err.status = 401;
    err.title = "Unauthorized";
    throw err;
  }
  const token = await jwt.sign(
    { id: user.id, username: user.username },
    secret,
    { expiresIn }
  );

  res.cookie('token', token, { maxAge: expiresIn * 1000 });

  res.json({ id: user.id, token });

}));


module.exports = router;
