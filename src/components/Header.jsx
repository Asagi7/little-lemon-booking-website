import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

/**
 * Site header with the Little Lemon logo and the main navigation.
 * The nav landmark carries an aria-label for screen readers.
 */
export default function Header() {
  return (
    <header className="site-header">
      <img src={logo} alt="Little Lemon restaurant logo" className="logo" />
      <nav className="main-nav" aria-label="Main navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#specials">Menu</a></li>
          <li><Link to="/booking">Reservations</Link></li>
        </ul>
      </nav>
    </header>
  );
}
