import Post from './Post.js';
import '../css/Favorites.css';

export default function Favorites({posts, toggleFavorite}) {
  let favorites = posts.filter((post) => post.isFavorite)
  let favoriteElements = favorites.map((post) => {
    return(
      <Post
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
        user={post.user}
        isFavorite={post.isFavorite}
        toggleFavorite={toggleFavorite}
      />
    )
  })

  return(
    <div className="favorites">
      <h1>FAVORITES</h1>
      {favoriteElements.length == 0 && <p>You have 0 favorites</p>}
      <div className="favorites-content">
        {favoriteElements}
      </div>
    </div>
  )
}