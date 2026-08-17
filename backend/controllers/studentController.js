import pool from "../config/db.js";

export const getAllStudents = async (req, res, next) => {
    try {
        const result = await pool.query(
            "SELECT * FROM students ORDER BY id DESC"
        );

        res.status(200).json({
            success: true,
            data: result.rows,
        });
    } catch (error) {
        next(error);
    }
};

export const getStudentById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "SELECT * FROM students WHERE id = $1 LIMIT 1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: `Student with ID ${id} not found.`,
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

export const createStudent = async (req, res, next) => {
    try {
        const { name, email, age } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: "Name and email are required.",
            });
        }

        const result = await pool.query(
            `INSERT INTO students (name, email, age)
       VALUES ($1, $2, $3)
       RETURNING *`,
            [name, email, age || null]
        );

        res.status(201).json({
            success: true,
            data: result.rows[0],
            message: "Student created successfully.",
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

export const updateStudent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: "Name and email are required.",
            });
        }

        const result = await pool.query(
            `UPDATE students
       SET name = $1,
           email = $2,
           age = $3
       WHERE id = $4
       RETURNING *`,
            [name, email, age || null, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: `Student with ID ${id} not found.`,
            });
        }

        res.status(200).json({
            success: true,
            data: result.rows[0],
            message: "Student updated successfully.",
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

export const deleteStudent = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "DELETE FROM students WHERE id = $1 RETURNING *",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: `Student with ID ${id} not found.`,
            });
        }

        res.status(200).json({
            success: true,
            data: result.rows[0],
            message: "Student deleted successfully.",
        });
    } catch (error) {
        next(error);
    }
};