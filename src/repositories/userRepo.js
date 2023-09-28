const { user } = require("../models");

class userRep {
  async get() {
    const res = await user.findOne({
      where: {
        role: "admin",
      },
    });

    return res;
  }

  async getUserByEmail(email) {
    const res = await user.findOne({ where: { email: email } });
    return res;
  }

  async post(data) {
    const res = await user.create(data);
    return res;
  }
}
module.exports = userRep;
