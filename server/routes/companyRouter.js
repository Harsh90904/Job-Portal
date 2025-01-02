const {Router} = require("express");
const { getcompany, getcompanyByid, createcompany, updatecompany, deletecompany } = require("../controllers/companyController");


const companyrouter = Router();

companyrouter.get("/",getcompany);
companyrouter.get("/:id",getcompanyByid);
companyrouter.post("/",createcompany);
companyrouter.patch("/:id",updatecompany);
companyrouter.delete("/:id", deletecompany)

module.exports = companyrouter;