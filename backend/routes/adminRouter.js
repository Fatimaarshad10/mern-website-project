const express = require("express");
const Admin = express.Router();
const {
    AdminLogin,
} = require("../controllers/adminController");
Admin.post("/login", AdminLogin);

module.exports = Admin;
