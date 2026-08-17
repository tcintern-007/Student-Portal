import pool from "../config/db.js";

export const getAllCourses = async (req, res, next) => {
    try {
        const page = Math.max(1, parseInt(req.query.page, 10) || 1);
        const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 10));
        const search = typeof req.query.search === "string" ? req.query.search.trim() : "";
        const offset = (page - 1) * limit;

        const conditions = [];
        const values = [];
        let count = 1;

        if (search) {
            conditions.push(`(title ILIKE $${count} OR description ILIKE $${count})`);
            values.push(`%${search}%`);
            count++;
        }

        const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

        const countResult = await pool.query(
            `SELECT COUNT(*) FROM courses ${whereClause}`,
            values
        );
        const totalItems = parseInt(countResult.rows[0].count, 10);

        const dataResult = await pool.query(
            `SELECT * FROM courses ${whereClause} ORDER BY id DESC LIMIT $${count} OFFSET $${count + 1}`,
            [...values, limit, offset]
        );

        const authenticatedUserId = req.user?.userId || null;

        const data = dataResult.rows.map((row) => ({
            ...row,
            isOwner: authenticatedUserId !== null && row.owner_id === authenticatedUserId,
        }));

        res.status(200).json({
            success: true,
            data,
            pagination: {
                page,
                limit,
                totalItems,
                totalPages: Math.ceil(totalItems / limit) || 1,
            },
        });
    } catch (error) {
        next(error);
    }
};

export const getCourseById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "SELECT * FROM courses WHERE id = $1 LIMIT 1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: `Course with ID ${id} not found.`,
            });
        }

        const row = result.rows[0];
        const authenticatedUserId = req.user?.userId || null;

        const data = {
            ...row,
            isOwner: authenticatedUserId !== null && row.owner_id === authenticatedUserId,
        };

        res.status(200).json({
            success: true,
            data,
        });
    } catch (error) {
        next(error);
    }
};

export const createCourse = async (req, res, next) => {
    try {
        const {
            title,
            instructor_id,
            description,
        } = req.body;

        const owner_id = req.user.userId;

        const result = await pool.query(
            `INSERT INTO courses (title, instructor_id, description, owner_id)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [
                title,
                instructor_id,
                description,
                owner_id,
            ]
        );

        res.status(201).json({
            success: true,
            data: result.rows[0],
        });
    } catch (error) {
        next(error);
    }
};

export const updateCourse = async (req, res, next) => {
    try {
        const { id } = req.params;

        const {
            title,
            instructor_id,
            description,
        } = req.body;

        const result = await pool.query(
            `UPDATE courses
             SET
               title = $1,
               instructor_id = $2,
               description = $3
             WHERE id = $4
             RETURNING *`,
            [
                title,
                instructor_id,
                description,
                id,
            ]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: `Course with ID ${id} not found.`,
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

export const deleteCourse = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "DELETE FROM courses WHERE id = $1 RETURNING id",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: `Course with ID ${id} not found.`,
            });
        }

        res.status(200).json({
            success: true,
            message: "Course deleted successfully.",
        });
    } catch (error) {
        next(error);
    }
};
