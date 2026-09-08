import Banner from "../components/Banner";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./home.css";

function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="home">
      <Header />
      <main>
        <section className="welcome-section">
          <p className="eyebrow">CodeBridge Academy</p>
          <h1>Welcome to your next chapter in tech.</h1>
          <p className="slogan">Bridge learning to real software careers</p>
        </section>

        <Banner />

        <section className="catalog-section" aria-labelledby="catalog-heading">
          <div className="section-heading">
            <p className="eyebrow">Learn by building</p>
            <h2 id="catalog-heading">Featured courses</h2>
          </div>
          <Courses />
        </section>
      </main>
      <Footer currentYear={currentYear} />
    </div>
  );
}

export default Home;