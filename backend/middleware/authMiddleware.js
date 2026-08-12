import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
    try {
        // Get Authorization header
        const authHeader = req.headers.authorization;

        // Check if token exists
        if (!authHeader) {
            return res.status(401).json({
                message: "Authentication token is required",
            });
        }

        // Expected format: Bearer TOKEN
        const parts = authHeader.split(" ");

        if (parts.length !== 2 || parts[0] !== "Bearer") {
            return res.status(401).json({
                message: "Invalid authorization format",
            });
        }

        const token = parts[1];

        // Verify JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Store user information in request
        req.user = decoded;

        // Continue to the next middleware/controller
        next();

    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                message: "Token has expired",
            });
        }

        return res.status(401).json({
            message: "Invalid token",
        });
    }
};