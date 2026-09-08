import CourseCard from "./CourseCard";

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
  return (
    <section className="courses-section" aria-labelledby="available-courses-heading">
      <h3 id="available-courses-heading">Available courses</h3>
      {courses.length === 0 ? (
        <p>No courses Available</p>
      ) : (
        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard
              key={`${course.title}-${course.instructor}`}
              {...course}
              isFeatued={true}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Courses;