"use client";

import { useState, useEffect } from "react";
import CourseCard from "../../components/CourseCard";
import SectionTitle from "../../components/SectionTitle";
import CourseForm from "../../components/CourseForm";
import { getCourses } from "../../lib/api";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadCourses = async () => {
    try {
      const result = await getCourses();
      setCourses(result.data);
    } catch (err) {
      setError(
        "Unable to load courses. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Courses
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Loading courses...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Courses
            </h1>
            <p className="text-red-100 text-lg max-w-2xl mx-auto mb-4">
              {error}
            </p>
            <button
              onClick={loadCourses}
              className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Courses
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Discover a wide range of courses designed to help you master new
            skills and advance your career.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <CourseForm onCourseAdded={loadCourses} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
