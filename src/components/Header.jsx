import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="site-header">
      <Link className="brand" to="/">
        CodeBridge Academy
      </Link>
      <Navbar />
      <div className="header-actions">
        <Link className="header-link" to="/login">Log in</Link>
        <Link className="header-button" to="/register">Register</Link>
      </div>
    </header>
  );
};

export default Header;
