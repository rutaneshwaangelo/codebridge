function CourseCard({ title, category, instructor, price, isFeatued, searchTerm }) {
  const matchIndex = searchTerm ? title.toLowerCase().indexOf(searchTerm) : -1;
  const titleContent =
    matchIndex === -1 ? (
      title
    ) : (
      <>
        {title.slice(0, matchIndex)}
        <mark>{title.slice(matchIndex, matchIndex + searchTerm.length)}</mark>
        {title.slice(matchIndex + searchTerm.length)}
      </>
    );

  return (
    <article className={`course-card${isFeatued ? " featured" : ""}`}>
      <span className="course-category">{category}</span>
      <h4>{titleContent}</h4>
      <p className="course-instructor">Instructor: {instructor}</p>
      <div className="course-card-footer">
        <span className="course-price">${price}</span>
        <button type="button">Enroll</button>
      </div>
    </article>
  );
}

export default CourseCard;