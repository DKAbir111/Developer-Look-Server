const User = require('../models/userModel')
const createUser = async (req, res) => {
    try {
        const email = req.body.email
        const newUser = new User({ email })
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = createUser;