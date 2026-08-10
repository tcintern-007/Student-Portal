import InstructorCard from "../../components/InstructorCard";
import SectionTitle from "../../components/SectionTitle";
import { instructors } from "../../data/instructors";

export default function Instructors() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Instructors
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Meet our team of expert instructors who are passionate about teaching
            and dedicated to your success.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
