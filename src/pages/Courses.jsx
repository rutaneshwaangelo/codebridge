import CourseCard from "../components/CourseCard";
function Courses() {    
     const courses = [
        {
            id:1,
            category: "Web Development",
            title: "React Fundamentals",
            price: 49.99,
            isAvailable: true,
        },
        {
            id:2,
            category: "Programming",
            title: "JavaScript Basics",
            price: 39.99,
            isAvailable: true,
        },
        {
            id:3,
            category: "Data Science",
            title: "Python for Data Analysis",
            price: 59.99,
            isAvailable: false, 
        }
    ];
        return <div style={{padding: "20px", maxwidth: "800px", margin: " auto"}}>
            <h2>Available Courses</h2>
            {courseList.length===0?(<P style={{color:'6483b'}}>No course Available</P>):(
                <div style={{display: "flex", flexWrap: "wrap", gap: "20px",marginTop: "20px"}}>
                    {/*Display Data */}
                    {courseList.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            )}
        </div>;
    };