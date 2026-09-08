const Header = () => {
  return (
    <header className="site-header">
      <a className="brand" href="/">
        CodeBridge Academy
      </a>
      <nav aria-label="Main navigation">
        <input type="search" placeholder="Search..." className="search_btn"/>
        <a href="#catalog-heading">Catalog</a>
        <a href="#footer">About</a>
      </nav>
    </header>
  );
};

export default Header;
