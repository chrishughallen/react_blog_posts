import Post from './Post.js';
import '../css/Posts.css';

export default function Posts ({posts, toggleFavorite}) {
  let postElements = posts.map((post) => {
    return(
      <Post
        id={post.id}
        key={post.id}
        title={post.title}
        body={post.body}
        user={post.user}
        toggleFavorite={toggleFavorite}
        isFavorite={post.isFavorite}
      />
    )
  })
  return(
    <div className="posts">
      <h1>POSTS</h1>
      <div className="posts-content">
        {postElements}
      </div>
    </div>
  )
}