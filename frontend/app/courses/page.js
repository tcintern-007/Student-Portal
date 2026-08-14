"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CourseCard from "../../components/CourseCard";
import SectionTitle from "../../components/SectionTitle";
import CourseForm from "../../components/CourseForm";
import { getCourses } from "../../lib/api";
import { useAuth } from "../../context/AuthContext";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { token, user, isAuthenticated } = useAuth();
  const router = useRouter();
  const isAdmin = user?.role === "admin";

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  const loadCourses = async () => {
    try {
      const result = await getCourses(token, { search, page, limit: 10 });
      setCourses(result.data);
      setTotalPages(result.pagination?.totalPages || 1);
    } catch (err) {
      setError(err.message || "Unable to load courses.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadCourses();
    }
  }, [isAuthenticated, token, search, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  if (!isAuthenticated) {
    return null;
  }

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
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-4 max-w-xl mx-auto">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all"
              >
                Search
              </button>
            </div>
          </form>

          <div className={`grid grid-cols-1 gap-12 ${isAdmin ? "lg:grid-cols-3" : ""}`}>
            <div className={isAdmin ? "lg:col-span-2" : ""}>
              {courses.length === 0 ? (
                <p className="text-center text-gray-500 py-12">No courses found.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-12">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-gray-600">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
            {isAdmin && (
              <div className="lg:col-span-1">
                <CourseForm onCourseAdded={loadCourses} />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
