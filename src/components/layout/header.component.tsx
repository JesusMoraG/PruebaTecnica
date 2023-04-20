import { Link } from "react-router-dom";
import "./header.css";

/**
 * Header component
 *
 * @returns {JSX.Element}
 */
const Header = () => {
  return (
    <header>
      <div>
        <div>
          <h2>Prueba Tecnica FonYou - Jesus Alberto Mora Galan</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/favorites">Favoritos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
