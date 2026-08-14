import pool from "../config/db.js";

export const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: "You do not have permission to perform this action",
            });
        }

        next();
    };
};

export const checkOwnership = (resourceTable) => {
    return async (req, res, next) => {
        try {
            const { id } = req.params;
            const userId = req.user.userId;

            const result = await pool.query(
                `SELECT owner_id FROM ${resourceTable} WHERE id = $1`,
                [id]
            );

            if (result.rows.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Resource not found.",
                });
            }

            if (result.rows[0].owner_id !== userId) {
                return res.status(403).json({
                    success: false,
                    message: "You do not have permission to modify this resource.",
                });
            }

            next();
        } catch (error) {
            next(error);
        }
    };
};
