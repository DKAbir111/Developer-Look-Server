const jwt = require('jsonwebtoken');
const authUser = async (req, res) => {
    const user = req.body
    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    })
        .send({ success: true });
}

const logOut = async (req, res) => {
    res
        .clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict'
        })
        .send({ success: true })
}

module.exports = { authUser, logOut };