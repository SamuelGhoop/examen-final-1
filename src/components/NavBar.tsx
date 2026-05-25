import { Link } from "react-router-dom";

function NavBar() {
  return (
    
    <nav className="grid text-3xl centered font-bold text-red-600">
      <Link to="/">| Inicio</Link>
        <Link to="/favorites"> | Favoritos</Link>

    </nav>
  );
}
export default NavBar;