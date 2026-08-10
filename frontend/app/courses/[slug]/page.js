"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getCourses } from "../../lib/api";
import { Clock, User, BarChart3, ArrowLeft, CheckCircle } from "lucide-react";

export default function CourseDetail({ params }) {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCourse() {
      try {
        const result = await getCourses();
        const found = result.data.find((c) => c.slug === params.slug);
        setCourse(found);
      } catch (err) {
        setError("Unable to load course details.");
      } finally {
        setLoading(false);
      }
    }

    loadCourse();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading course...</p>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">
            {error || "Course not found."}
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Courses
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {course.title}
          </h1>
          <p className="text-blue-100 text-lg max-w-3xl">
            {course.description}
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  About This Course
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {course.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This comprehensive course will take you from beginner to
                  proficient in {course.title.toLowerCase()}. You&apos;ll work
                  on real-world projects, learn industry best practices, and
                  receive personalized feedback from expert instructors.
                </p>
              </div>

              {course.skills && course.skills.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    What You&apos;ll Learn
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {course.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {course.modules && course.modules.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Course Modules
                  </h2>
                  <div className="space-y-4">
                    {course.modules.map((module, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors"
                      >
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 font-medium">
                          {module}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-24">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-700">
                    <User className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Instructor</div>
                      <div className="font-medium">{course.instructor}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-medium">{course.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <BarChart3 className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Level</div>
                      <div className="font-medium">{course.level}</div>
                    </div>
                  </div>
                </div>
                <button className="w-full py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 mb-4">
                  Enroll Now
                </button>
                <p className="text-center text-sm text-gray-500">
                  Start learning today and transform your career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
