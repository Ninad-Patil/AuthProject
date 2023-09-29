const { userService } = require("../services");

async function checkAuth(req, res, next) {
  try {
    const response = await userService.isAuthenticated(
      req.headers["x-access-token"]
    );
    if (response) {
      res.data = { response, messsage: "you accessed a protected path" };
      next();
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  checkAuth,
};
