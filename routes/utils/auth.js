const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../../config').jwtConfig;

const db = require('../../db/models');

const { User } = db;

exports.getUserToken = async (user) => {
    return await jwt.sign(
        { id: user.id, username: user.username },
        secret,
        { expiresIn }
    );
};
