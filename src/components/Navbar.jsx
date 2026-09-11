import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav aria-label="Main navigation">
      <NavLink to="/#catalog-heading">Catalog</NavLink>
      <NavLink to="/#footer">About</NavLink>
    </nav>
  );
}

export default Navbar;
