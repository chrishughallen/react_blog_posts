import { Link } from 'react-router-dom';
import './css/Navbar.css';

export default function Navbar() {
  return(
    <nav className="navbar">
      <Link to="/posts">Posts</Link>
      {/* <Link to="/users">Users</Link> */}
      <Link to="/favorites">Favorites</Link>
    </nav>
  )
}