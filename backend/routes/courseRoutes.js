import { Router } from "express";

import {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
} from "../controllers/courseController.js";

import validateCourse from "../middleware/validateCourse.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
import { authorizeRoles, checkOwnership } from "../middleware/authorizationMiddleware.js";

const router = Router();

router.get("/", authenticateToken, getAllCourses);
router.get("/:id", authenticateToken, getCourseById);

router.post(
    "/",
    authenticateToken,
    authorizeRoles("admin"),
    validateCourse,
    createCourse
);

router.put(
    "/:id",
    authenticateToken,
    authorizeRoles("admin"),
    validateCourse,
    checkOwnership("courses"),
    updateCourse
);

router.delete(
    "/:id",
    authenticateToken,
    authorizeRoles("admin"),
    checkOwnership("courses"),
    deleteCourse
);

export default router;
