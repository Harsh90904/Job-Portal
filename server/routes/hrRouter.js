const {Router} = require("express");
const { getcompany, getcompanyByid, createcompany, updatecompany, deletecompany } = require("../controllers/hrController");


const hrrouter = Router();

hrrouter.get("/",getcompany);
hrrouter.get("/:id",getcompanyByid);
hrrouter.post("/",createcompany);
hrrouter.patch("/:id",updatecompany);
hrrouter.delete("/:id", deletecompany)

module.exports = hrrouter;