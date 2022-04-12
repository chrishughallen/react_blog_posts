import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar() {
  return(
    <nav className="navbar">
      <NavLink
        to="/posts"
        className={({isActive}) => (isActive ? "nav-link nav-link-active" : "nav-link")}
      >
        Posts
      </NavLink>

      <NavLink
        to="/favorites"
        className={({isActive}) => (isActive ? "nav-link nav-link-active" : "nav-link")}
      >
        Favorites
      </NavLink>
    </nav>
  )
}