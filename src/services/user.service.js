const User = require('../models/user.model');

const userService = {
  create: async (email, password) => {
    return User.UserService({
      email,
      password,
    });
  },

  findById: async (id) => {
    return User.findById(id).exec(); ;
  },

  findOne: async (conditions) => {
    return User.findOne(conditions);
  },
};

module.exports = userService;
