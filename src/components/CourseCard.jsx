function CourseCard({ title, category, instructor, price, isFeatued }) {
  return (
    <article className={`course-card${isFeatued ? " featured" : ""}`}>
      <span className="course-category">{category}</span>
      <h4>{title}</h4>
      <p className="course-instructor">Instructor: {instructor}</p>
      <div className="course-card-footer">
        <span className="course-price">${price}</span>
        <button type="button">Enroll</button>
      </div>
    </article>
  );
}

export default CourseCard;