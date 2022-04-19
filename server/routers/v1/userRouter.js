const user = require("express").Router();
const { isAuthenticated, isAuthorized } = require("../../middleware");
const { getUsers, getUserById } = require("../../controller/user");

user.use(isAuthenticated);
user.use(isAuthorized([{ role: "admin" }, { role: "user", sameUser: true }]));
user.get("/", getUsers);
user.get("/:id", getUserById);
// implement delete kalo mau ada delete

module.exports = user;
