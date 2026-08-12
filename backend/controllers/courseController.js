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
      instructor,
      description,
      duration,
    } = req.body;

    const image =
      "https://placehold.co/600x400/3b82f6/ffffff?text=New+Course";

    const slug = title.toLowerCase().trim().replace(/\s+/g, "-");

    const result = await pool.query(
      `INSERT INTO courses
        (title, instructor, description, duration, image, slug)
       VALUES
        ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [
        title,
        instructor,
        description,
        duration,
        image,
        slug,
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
      instructor,
      description,
      duration,
    } = req.body;

    const result = await pool.query(
      `UPDATE courses
       SET
         title = $1,
         instructor = $2,
         description = $3,
         duration = $4
       WHERE id = $5
       RETURNING *`,
      [
        title,
        instructor,
        description,
        duration,
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