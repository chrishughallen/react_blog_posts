import Post from './Post.js';

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
    <div>
      <h1>Favorites</h1>
      {favoriteElements.length == 0 && <p>You have 0 favorites</p>}
      {favoriteElements}
    </div>
  )
}