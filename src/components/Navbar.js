import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar({favCount, followCount}) {
  return(
    <nav className="navbar">
      <NavLink
        to="/"
        className={({isActive}) => (isActive ? "nav-link nav-link-active" : "nav-link")}
      >
        Posts
      </NavLink>

      <NavLink
        to="/favorites"
        className={({isActive}) => (isActive ? "nav-link nav-link-active" : "nav-link")}
      >
        Favorites({favCount})
      </NavLink>

      <NavLink
        to="/users"
        className={({isActive}) => (isActive ? "nav-link nav-link-active" : "nav-link")}
      >
        Users
      </NavLink>

      <NavLink
        to="/following"
        className={({isActive}) => (isActive ? "nav-link nav-link-active" : "nav-link")}
      >
        Following({followCount})
      </NavLink>
    </nav>
  )
}