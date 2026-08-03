"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-1000" />
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-sky-200 rounded-full opacity-20 animate-pulse delay-500" />
        <div className="absolute top-20 left-1/3 w-32 h-32 bg-blue-300 rounded-full opacity-10 animate-pulse delay-700" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse" />
            New courses added weekly
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Learn Skills That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Shape Your Future
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Unlock your potential with industry-leading courses taught by expert
            instructors. Start your journey to a brighter career today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/courses"
              className="group inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105"
            >
              Explore Courses
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-700 rounded-full font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:shadow-lg"
            >
              <Play className="mr-2 w-5 h-5" />
              Contact Us
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-500">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm">Expert Courses</div>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">20K+</div>
              <div className="text-sm">Students</div>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">100+</div>
              <div className="text-sm">Instructors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
