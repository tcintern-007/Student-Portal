import Link from "next/link";
import { Clock, User, BarChart3 } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
            {course.level}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {course.instructor}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {course.duration}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <BarChart3 className="w-4 h-4 mr-1" />
            {course.level}
          </div>
          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
          >
            View Details
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
