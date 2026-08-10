"use client";

import { useState } from "react";
import { createCourse } from "../lib/api";

export default function CourseForm({ onCourseAdded }) {
  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    description: "",
    duration: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      await createCourse(formData);
      setFormData({ title: "", instructor: "", description: "", duration: "" });
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
            htmlFor="instructor"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Instructor
          </label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="e.g. John Doe"
          />
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

        <div>
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Duration
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="e.g. 8 Weeks"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
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
