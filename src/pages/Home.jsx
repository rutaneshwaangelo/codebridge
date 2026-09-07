import Banner from "../components/Banner";
import CourseCard from "../components/CourseCard";

function Home() {
  const currentYear = new Date().getFullYear();
  const slogan = "Connecting learners with technology";

  return (
    <main>
      <h2>Welcome to CodeBridge Academy</h2>

      <p>Welcome to our learning platform for the year {currentYear}.</p>

      <p>{slogan}</p>

      <Banner />

      <h2>Our Courses</h2>

      <div className="courses">
        <CourseCard
          title="React Fundamentals"
          category="Web Development"
          price={100}
          isAvailable={true}
        />

        <CourseCard
          title="JavaScript Basics"
          category="Programming"
          price={80}
          isAvailable={true}
        />

        <CourseCard
          title="UI/UX Design"
          category="Design"
          price={120}
          isAvailable={false}
        />
        
        <CourseCard
          title="node"
          category="Design"
          price={120}
          isAvailable={false}
        />
        
      </div>
    </main>
  );
}

export default Home;