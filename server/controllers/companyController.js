const bcrypt = require("bcrypt");
const HR= require("../models/hr")
const createcompany = async (req,res) => {
    try {
        const {HRname, company,error,password,phone,stasus} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const companydata = await HR.create({
            HRname,
            company,
            error,
            password: hashedPassword,
            phone,
            stasus,
        });
        res.status(201).send(companydata);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getcompany = async (req, res) => {
    try {
        const companydata = await HR.find();
        res.send(companydata);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getcompanyByid = async (req, res) =>{
    try {
        const {id} = req.params;
        const companydata = await HR.findById(id);
        res.send(companydata);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const updatecompany = async (req, res) =>{
    try {
        const {id} = req.params;
        const {HRname, company,error,phone,stasus} = req.body;
        const updatedcompany = await HR.findByIdAndUpdate(id, {HRname, company, error, phone, stasus}, {new: true});
        res.send(updatedcompany);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const deletecompany = async (req, res) => {
    try {
        const {id} = req.params;
        await HR.findByIdAndDelete(id);
        res.send("Company deleted successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {createcompany, getcompany, getcompanyByid, updatecompany, deletecompany};