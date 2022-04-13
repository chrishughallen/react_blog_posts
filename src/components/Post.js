import { NavLink } from 'react-router-dom';
import '../css/Post.css';

export default function Post({id, title, body, user, toggleFavorite, isFavorite, nanokey}) {
  let buttonClass = isFavorite ? "button-secondary" : "button-primary"
  return(
    <div key={id} className="post">
      <div className="post-header">
        <h1>{title}</h1>
        {toggleFavorite && <button className={buttonClass} id={id} onClick={toggleFavorite}>{isFavorite ? "Remove from favorites" : "Add to favorites"}</button>}
      </div>
     
      <div className="post-footer">
        <NavLink to={`/post/${id}`}>
            View Post
        </NavLink>
      </div>
    </div>
  )
}