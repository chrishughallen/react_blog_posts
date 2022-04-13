import Post from './Post.js';
import '../css/Posts.css';

export default function Posts ({posts, toggleFavorite, users }) {
  console.log(users)
  let postElements = posts.map((post) => {
    return(
      <Post
        id={post.id}
        key={post.id}
        title={post.title}
        toggleFavorite={toggleFavorite}
        isFavorite={post.isFavorite}
      />
    )
  })
  return(
    <div className="posts">
      <h1>Posts</h1>
      <div className="posts-content">
        {postElements}
      </div>
    </div>
  )
}