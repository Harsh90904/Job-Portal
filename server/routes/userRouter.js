const {Router} = require("express");
const { getuser, getuserbyid, createprofile, updateuser, deleteuser } = require("../controllers/userController");

const userrouter = Router();

userrouter.get("/", getuser);
userrouter.get("/:id", getuserbyid);
userrouter.post("/", createprofile);
userrouter.patch("/:id", updateuser);
userrouter.delete("/:id", deleteuser)

module.exports = userrouter;