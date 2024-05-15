const express = require("express");
const routers = express.Router();
const {addUser, loggedUser, getUser} = require("../controllers/userController.js");

routers.post("/register", addUser);
routers.post("/login", loggedUser);
routers.get("/user", getUser);

module.exports = routers;