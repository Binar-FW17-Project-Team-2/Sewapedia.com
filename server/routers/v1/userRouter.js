const user = require("express").Router();
const { isAuthenticated, isAuthorized } = require("../../middleware");
const { getUsers, getUserById, editUser, deleteUser } = require("../../controller/user");

user.use(isAuthenticated);
user.use(isAuthorized([{ role: "admin" }, { role: "user" }]));
user.get("/", getUsers);
user.post('/edit', editUser);
user.get("/:id", getUserById);
user.delete("/:id", deleteUser);
// implement delete kalo mau ada delete

module.exports = user;
