import '../Post.css';

export default function Post({id, title, body, user, toggleFavorite, isFavorite, nanokey}) {
  let buttonClass = isFavorite ? "button-secondary" : "button-primary"
  return(
    <div key={id} className="post">
      <h1>{title}</h1>
      <p>{body}</p>
      <p>{user}</p>
      <button className={buttonClass} id={id} onClick={toggleFavorite}>{isFavorite ? "Remove from favorites" : "Add to favorites"}</button>
    </div>
  )
}