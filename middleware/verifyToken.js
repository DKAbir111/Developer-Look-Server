const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({ message: "Access denied. No token provided." });
        }

        // Verify token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Access denied. Invalid or expired token." });
            }
            req.decoded = decoded;
            next();
        });

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

module.exports = verifyToken;
