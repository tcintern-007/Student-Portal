const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCourses = async () => {
  const res = await fetch(`${API_URL}/api/courses`);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to fetch courses");
  }
  return res.json();
};

export const getCourse = async (id) => {
  const res = await fetch(`${API_URL}/api/courses/${id}`);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to fetch course");
  }
  return res.json();
};

export const createCourse = async (course) => {
  const res = await fetch(`${API_URL}/api/courses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(course),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to create course");
  }
  return res.json();
};

export const updateCourse = async (id, course) => {
  const res = await fetch(`${API_URL}/api/courses/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(course),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to update course");
  }
  return res.json();
};

export const deleteCourse = async (id) => {
  const res = await fetch(`${API_URL}/api/courses/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to delete course");
  }
  return res.json();
};
