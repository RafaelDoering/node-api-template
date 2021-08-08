const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserService = require('./user.service');

/**
 *
 * @param {object} user
 *
 * @return {object}
 */
function formatResponse(user) {
  const token = jwt.sign({userId: user.id}, process.env.JWT_PRIVATE_KEY);

  return {
    user: {
      id: user.id,
      email: user.email,
    },
    token,
  };
}

const authService = {
  signup: async (email, password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const createdUser = await UserService.create(email, hash);

    return formatResponse(createdUser);
  },

  login: async (email, password) => {
    const user = await UserService.findOne({email});

    if (!bcrypt.compareSync(password, user.password)) {
      return null;
    }

    return formatResponse(user);
  },

  authenticate: async (token) => {
    try {
      if (!token) {
        return false;
      }
      token = token.replace('Bearer ', '');
      const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);

      const user = await UserService.findById(decoded.userId);
      if (!user) {
        return false;
      }
      return user;
    } catch (e) {
      return false;
    }
  },
};

module.exports = authService;
