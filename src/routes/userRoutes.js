const express = require("express");
const { userController } = require("../controllers");
const { authRequestMiddleware } = require("../middlewares");

const router = express.Router();
router.post("/signin", userController.signin);
router.get("/secretPath", authRequestMiddleware.checkAuth, (req, res) => {
  return res.send(res.data);
});
module.exports = router;
