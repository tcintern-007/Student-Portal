import pool from "../config/db.js";

export const getAllInstructors = async (req, res, next) => {
    try {
        const result = await pool.query(
            "SELECT * FROM instructors ORDER BY id DESC"
        );

        res.status(200).json({
            success: true,
            data: result.rows,
        });
    } catch (error) {
        next(error);
    }
};

export const getInstructorById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "SELECT * FROM instructors WHERE id = $1 LIMIT 1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: `Instructor with ID ${id} not found.`,
            });
        }

        res.status(200).json({
            success: true,
            data: result.rows[0],
        });
    } catch (error) {
        next(error);
    }
};

export const createInstructor = async (req, res, next) => {
    try {
        const { name, email, specialization } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: "Name and email are required.",
            });
        }

        const result = await pool.query(
            `INSERT INTO instructors (name, email, specialization)
       VALUES ($1, $2, $3)
       RETURNING *`,
            [name, email, specialization || null]
        );

        res.status(201).json({
            success: true,
            data: result.rows[0],
            message: "Instructor created successfully.",
        });
    } catch (error) {
        if (error.code === "23505") {
            return res.status(409).json({
                success: false,
                message: "Email already exists.",
            });
        }

        next(error);
    }
};

export const updateInstructor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email, specialization } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: "Name and email are required.",
            });
        }

        const result = await pool.query(
            `UPDATE instructors
       SET name = $1,
           email = $2,
           specialization = $3
       WHERE id = $4
       RETURNING *`,
            [name, email, specialization || null, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: `Instructor with ID ${id} not found.`,
            });
        }

        res.status(200).json({
            success: true,
            data: result.rows[0],
            message: "Instructor updated successfully.",
        });
    } catch (error) {
        if (error.code === "23505") {
            return res.status(409).json({
                success: false,
                message: "Email already exists.",
            });
        }

        next(error);
    }
};

export const deleteInstructor = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "DELETE FROM instructors WHERE id = $1 RETURNING *",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: `Instructor with ID ${id} not found.`,
            });
        }

        res.status(200).json({
            success: true,
            data: result.rows[0],
            message: "Instructor deleted successfully.",
        });
    } catch (error) {
        next(error);
    }
};