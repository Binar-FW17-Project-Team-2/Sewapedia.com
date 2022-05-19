const user = require("express").Router();
const { isAuthenticated, roleAuthorization } = require("../../middleware");
const { getUsers, getUserById, editUser, deleteUser } = require("../../controller/user");

user.use(isAuthenticated);
user.get("/", getUsers);
user.put("/edit/:id", editUser);
user.get("/:id", getUserById);
user.delete("/:id", deleteUser);
// implement delete kalo mau ada delete

module.exports = user;
