require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const password = process.env.PASSWORD;
const storepassword = bcrypt.hash(password, saltRounds);
const AdminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (
      email === process.env.EMAIL && bcrypt.compare(JSON.stringify(password), JSON.stringify(storepassword))
    ) {
      res.status(200).json("admin is login");
    } else {
      res.status(400).send("invalid admin");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { AdminLogin };
