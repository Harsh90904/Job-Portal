const bcrypt = require('bcrypt');
const User = require('../models/User');


const createprofile = async (req, res) => {
    try {
        const { name, email, number, city, state, country, zip, password, resume, skills, education, university, experience, github, linkedin } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        const data = {
            name,
            email,
            password: hashedPassword,
            number,
            city,
            state,
            country,
            zip,
            resume,
            skills,
            education,
            university,
            experience,
            github,
            linkedin
        };

        const user = await User.create(data);
        res.status(201).send({ message: 'User created successfully', user });
    } catch (error) {
        console.error('Error creating user:', error); // Logs the error in the console for debugging
        res.status(500).send({ 
            message: 'Error creating user', 
            error: error.message || 'Internal Server Error' 
        });
    }
};
const getuser = async (req, res) => {
    try {
        const users = await User.find(); 
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching users', error });
    }
};
const getuserbyid = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching user', error });
    }
};
const updateuser = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const user = await User.findByIdAndUpdate(id, updates, { new: true }); 

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).send({ message: 'Error updating user', error });
    }
};
const deleteuser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting user', error });
    }
};

module.exports = { createprofile, getuser, getuserbyid, updateuser, deleteuser };