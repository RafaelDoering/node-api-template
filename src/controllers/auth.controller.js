const authService = require('../services/auth.service');

const authController = {
  signup: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const createdUser = await authService.signup(email, password);

    return res.status(200).json(createdUser);
  },

  login: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await authService.login(email, password);

    if (!user) {
      return res.status(401).json();
    }

    return res.status(200).json(user);
  },

  authenticate: async (req, res, next) => {
    req.user = await authService.authenticate(req.header('Authorization'));

    if (!req.user) {
      return res.status(401).json();
    }

    next();
  },
};

module.exports = authController;
