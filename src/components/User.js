import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Post from './Post.js';

export default function User({users, posts, toggleFavorite}) {

  const [user, setUser] = useState({})
  const params = useParams()
  useEffect(() => {
    setUser(users.filter((user) => user.id == params.id)[0])
  }, [users, user])

  let postElements

  if (user) {
    const userPosts = posts.filter((post) => post.userId == user.id)
    postElements = userPosts.map((post) => 
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
  }
  return(
   
    <div className="user">
      {user && <div className="user">
        <h1>{user.username}</h1>
        <h3>{user.name}</h3>
        <a href="#">{user.email}</a>
        <br />
        <a href="#">{user.website}</a>
      </div>}
      {postElements}
    </div>
  )
  
}