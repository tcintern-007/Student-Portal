import pool from "../config/db.js";

export const getAllCourses = async (req, res, next) => {
  try {
    const result = await pool.query(
      "SELECT * FROM courses ORDER BY id DESC"
    );

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    next(error);
  }
};

export const getCourseById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM courses WHERE id = $1",
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
      data: result.rows[0],
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

    const result = await pool.query(
      `INSERT INTO courses
        (title, instructor_id, description)
       VALUES
        ($1, $2, $3)
       RETURNING *`,
      [
        title,
        instructor_id,
        description,
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
      "DELETE FROM courses WHERE id = $1 RETURNING *",
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
      data: result.rows[0],
      message: "Course deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};