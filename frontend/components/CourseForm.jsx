"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { createCourse, getInstructors } from "../lib/api";

export default function CourseForm({ onCourseAdded }) {
  const [formData, setFormData] = useState({
    title: "",
    instructor_id: "",
    description: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [instructors, setInstructors] = useState([]);
  const [loadingInstructors, setLoadingInstructors] = useState(true);

  const { user, token } = useAuth();
  const isAdmin = user?.role === "admin";

  useEffect(() => {
    async function loadInstructors() {
      try {
        const data = await getInstructors();
        setInstructors(data);
      } catch (err) {
        setMessage(err.message || "Failed to load instructors.");
      } finally {
        setLoadingInstructors(false);
      }
    }

    if (isAdmin) {
      loadInstructors();
    }
  }, [isAdmin]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      const payload = {
        title: formData.title.trim(),
        instructor_id: formData.instructor_id ? Number(formData.instructor_id) : null,
        description: formData.description.trim(),
      };

      console.log("Token exists:", !!token);
      console.log("Creating course:", payload);

      await createCourse(payload, token);
      setFormData({ title: "", instructor_id: "", description: "" });
      setMessage("Course added successfully!");
      if (onCourseAdded) {
        onCourseAdded();
      }
    } catch (err) {
      setMessage(err.message || "Failed to add course.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Course Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="e.g. Advanced React Patterns"
          />
        </div>

        <div>
          <label
            htmlFor="instructor_id"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Instructor
          </label>
          <select
            id="instructor_id"
            name="instructor_id"
            value={formData.instructor_id}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="">
              {loadingInstructors ? "Loading instructors..." : "Select an instructor"}
            </option>
            {!loadingInstructors &&
              instructors.map((instructor) => (
                <option key={instructor.id} value={instructor.id}>
                  {instructor.name}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            placeholder="Brief description of the course..."
          />
        </div>

        <button
          type="submit"
          disabled={submitting || loadingInstructors}
          className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Adding Course..." : "Add Course"}
        </button>

        {message && (
          <p
            className={`text-center text-sm ${
              message.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
