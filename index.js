const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./src/routes/userRoutes");
//const userRep = require("./src/repositories/userRepo");
dotenv.config();

const app = express();
//const router = express.Router();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api", userRoutes);
app.listen(3000, (req, res) => {
  console.log("server started on port 3000");
});
