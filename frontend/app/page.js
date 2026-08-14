"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Hero from "../components/Hero";
import CourseCard from "../components/CourseCard";
import SectionTitle from "../components/SectionTitle";
import { CheckCircle, Clock, Users, Award } from "lucide-react";
import { getCourses } from "../lib/api";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { isAuthenticated, token } = useAuth();

  useEffect(() => {
    async function loadCourses() {
      if (!isAuthenticated || !token) {
        setLoading(false);
        return;
      }

      try {
        const result = await getCourses(token);
        setCourses(result.data);
      } catch (err) {
        setError(err.message || "Unable to load courses.");
      } finally {
        setLoading(false);
      }
    }

    loadCourses();
  }, [isAuthenticated, token]);

  const featuredCourses = courses.slice(0, 3);

  const features = [
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of real-world experience.",
    },
    {
      icon: Clock,
      title: "Hands-on Learning",
      description:
        "Gain practical skills through projects, assignments, and real-world case studies.",
    },
    {
      icon: Award,
      title: "Career Ready Skills",
      description:
        "Build a portfolio that stands out and prepares you for the job market.",
    },
  ];

  if (loading) {
    return (
      <div>
        <Hero />
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600 text-lg">Loading courses...</p>
          </div>
        </section>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div>
        <Hero />
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600 text-lg mb-4">Please log in to view courses.</p>
            <Link
              href="/login"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Log In
            </Link>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Hero />
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-red-600 text-lg mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
            >
              Try Again
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <Hero />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Courses"
            subtitle="Explore our most popular courses and start learning today."
          />
          {featuredCourses.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No featured courses available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
          <div className="text-center mt-12">
            <Link
              href="/courses"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Choose Us"
            subtitle="We provide the best learning experience with industry-leading features."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
