const Header = () => {
  return (
    <header className="site-header">
      <a className="brand" href="/">
        CodeBridge Academy
      </a>
      <nav aria-label="Main navigation">
        <a href="#catalog-heading">Catalog</a>
        <a href="#footer">About</a>
      </nav>
      <div className="header-actions">
        <a className="header-link" href="/login">Log in</a>
        <a className="header-button" href="/register">Register</a>
      </div>
    </header>
  );
};

export default Header;
