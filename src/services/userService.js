const jwt = require("jsonwebtoken");
const userRep = require("../repositories/userRepo");
const bcrypt = require("bcrypt");
const userObj = new userRep();
const dotenv = require("dotenv");
dotenv.config();
async function signup(data) {
  const res = await userObj.post(data);
  return res;
}

async function signin(data) {
  try {
    console.log(process.env.API_SECRET);
    const user = await userObj.getUserByEmail(data.email);
    if (!user) {
      throw new Error("user not found");
    }
    const passIsValid = bcrypt.compareSync(data.password, user.password);
    if (!passIsValid) {
      throw new Error("password doesnt match");
    }
    const token = jwt.sign(
      {
        email: user.email,
      },
      process.env.API_SECRET,
      {
        expiresIn: 86400,
      }
    );
    return token;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  signin,
  signup,
};
