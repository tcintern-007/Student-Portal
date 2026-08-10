import { Router } from "express";
import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";
import validateCourse from "../middleware/validateCourse.js";

const router = Router();

router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.post("/", validateCourse, createCourse);
router.put("/:id", validateCourse, updateCourse);
router.delete("/:id", deleteCourse);

export default router;
