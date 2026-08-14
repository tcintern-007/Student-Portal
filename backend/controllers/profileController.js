import pool from "../config/db.js";

export const getProfile = async (req, res, next) => {
    try {
        const userId = req.user.userId;

        const result = await pool.query(
            "SELECT id, name, email, role, created_at FROM users WHERE id = $1",
            [userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }

        res.status(200).json({
            success: true,
            user: result.rows[0],
        });
    } catch (error) {
        next(error);
    }
};
