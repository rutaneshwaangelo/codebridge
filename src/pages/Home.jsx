import Banner from "../components/Banner";
import Courses from "./Courses.jsx";  

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

     <Courses />
        
    
    </main>
  );
}

export default Home;