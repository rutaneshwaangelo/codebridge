import CourseCard from "./CourseCard";
import { useState } from "react";

const courses = [
  {
    category: "Frontend",
    title: "React Foundamentals",
    instructor: "Kevin",
    price: 29.99,
  },
  {
    category: "Backend",
    title: "Nodejs",
    instructor: "Peter",
    price: 29.99,
  },
  {
    category: "Frontend",
    title: "React Foundamentals",
    instructor: "Muhashyi",
    price: 29.99,
  },
  {
    category: "Database",
    title: "Database foundamental",
    instructor: "Kalisa",
    price: 29.99,
  },
  {
    category: "Languages",
    title: "English",
    instructor: "Mugisha",
    price: 44.99,
  },
];

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(normalizedSearchTerm),
  );

  return (
    <section className="courses-section" aria-labelledby="available-courses-heading">
      <h3 id="available-courses-heading">Available courses</h3>
      <label className="course-search">
        <span>Search courses</span>
        <input
          type="search"
          placeholder="Search by course name..."
          className="search_btn"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </label>
      {filteredCourses.length === 0 ? (
        <p>No courses Available</p>
      ) : (
        <div className="course-grid">
          {filteredCourses.map((course) => (
            <CourseCard
              key={`${course.title}-${course.instructor}`}
              {...course}
              isFeatued={true}
              searchTerm={normalizedSearchTerm}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Courses;