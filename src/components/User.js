import {useParams } from 'react-router-dom';
import Post from './Post.js';

export default function User({users}) {
  const params = useParams()
  let user = users.filter((user) => user.id == params.id)[0]
  let posts = JSON.parse(window.localStorage.getItem('posts'))
  let userPosts = posts.filter((post) => post.userId == user.id)


  let postElements = userPosts.map((post) => {
    return(
      <Post
        id={post.id}
        key={post.id}
        title={post.title}
        body={post.body}
        user={post.username}
      />
    )
  })

  return(
    <div className="user">
      <div className="user-info">
        <h1>{user.username}</h1>
        <h3>{user.name}</h3>
        <a href="#">{user.email}</a>
        <br />
        <a href="#">{user.website}</a>
      </div>

      <div className="user-posts">
        <h1> Posts by {user.username}</h1>
        {postElements}
      </div>
    </div>
  )
}