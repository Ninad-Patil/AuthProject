const { userService } = require("../services");

async function signin(req, res) {
  const token = await userService.signin({
    email: req.body.email,
    password: req.body.password,
  });

  res.status(200).send({
    user: {
      email: req.body.email,
      password: req.body.password,
      token: token,
    },
  });
}

async function signup(req, res) {}

module.exports = {
  signin,
  signup,
};
