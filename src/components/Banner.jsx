import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner" aria-labelledby="banner-heading">
      <div>
        <p className="banner-label">Start where you are</p>
        <h2 id="banner-heading">Turn curiosity into working code.</h2>
      </div>
      <Link className="banner-button" to="/#catalog-heading">Browse Catalog</Link>
    </section>
  );
};

export default Banner;
