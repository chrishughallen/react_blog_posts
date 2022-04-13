import { NavLink } from 'react-router-dom';
import '../css/Post.css';

export default function Post({ id, title, author, toggleFavorite, isFavorite }) {
  console.log(author)
  return(
    <div key={id} className="post">
        <h1>{title}</h1>
        {toggleFavorite && <button id={id} onClick={toggleFavorite}>{isFavorite ? "Remove from favorites" : "Add to favorites"}</button>}
        <NavLink to={`/post/${id}`}>
            View Article
        </NavLink>
    </div>
  )
}