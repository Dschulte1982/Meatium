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

exports.getUserFromToken = async (token) => {
    try {
      const payload = jwt.verify(
        token,
        secret
      );
      return await User.findByPk(payload.id);
    } catch(err) {
      return null;
    }
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 8774b896f6ebd5715fdad9e1763f95c2677b66c0
