import Post from './Post.js';
import '../css/Posts.css';

export default function Posts ({posts, toggleFavorite}) {
  let users = JSON.parse(window.localStorage.getItem('users'))
  let postsWithUserName = posts.map((post) => {
    let user = users.filter((user) => user.id == post.userId)[0]
    return {...post, username: user.username}
  })

  let postElements = postsWithUserName.map((post) => {
    return(
      <Post
        id={post.id}
        key={post.id}
        title={post.title}
        body={post.body}
        user={post.username}
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