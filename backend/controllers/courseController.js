import { courses } from "../data/courses.js";

let nextId = courses.length + 1;

export const getAllCourses = (req, res) => {
  res.status(200).json({
    success: true,
    data: courses,
  });
};

export const getCourseById = (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course) {
    return res.status(404).json({
      success: false,
      message: `Course with ID ${req.params.id} not found.`,
    });
  }

  res.status(200).json({
    success: true,
    data: course,
  });
};

export const createCourse = (req, res) => {
  const { title, instructor, description, duration } = req.body;

  const newCourse = {
    id: nextId++,
    title,
    instructor,
    description,
    duration,
    image: "https://placehold.co/600x400/3b82f6/ffffff?text=New+Course",
    slug: title.toLowerCase().replace(/\s+/g, "-"),
    level: "Beginner",
    category: "General",
    rating: 0,
    students: 0,
    price: "Free",
    skills: [],
    modules: [],
  };

  courses.push(newCourse);

  res.status(201).json({
    success: true,
    data: newCourse,
  });
};

export const updateCourse = (req, res) => {
  const courseIndex = courses.findIndex(
    (c) => c.id === parseInt(req.params.id)
  );

  if (courseIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Course with ID ${req.params.id} not found.`,
    });
  }

  const { title, instructor, description, duration } = req.body;

  courses[courseIndex] = {
    ...courses[courseIndex],
    title: title || courses[courseIndex].title,
    instructor: instructor || courses[courseIndex].instructor,
    description: description || courses[courseIndex].description,
    duration: duration || courses[courseIndex].duration,
  };

  res.status(200).json({
    success: true,
    data: courses[courseIndex],
  });
};

export const deleteCourse = (req, res) => {
  const courseIndex = courses.findIndex(
    (c) => c.id === parseInt(req.params.id)
  );

  if (courseIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Course with ID ${req.params.id} not found.`,
    });
  }

  const deletedCourse = courses.splice(courseIndex, 1)[0];

  res.status(200).json({
    success: true,
    data: deletedCourse,
    message: "Course deleted successfully.",
  });
};
