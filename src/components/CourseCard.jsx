function CourseCard({ title, category, price, isAvailable }) {
  return (
    <div className="course-card">
      <h3>{title}</h3>

      <p>
        <strong>Category:</strong> {category}
      </p>

      <p>
        <strong>Price:</strong> RWF{price}
      </p>

      <p>
        <strong>Availability:</strong>{" "}
        {isAvailable ? "Available" : "Not Available"}
      </p>
    </div>
  );
}

export default CourseCard;