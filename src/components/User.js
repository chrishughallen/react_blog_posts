import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Post from './Post.js';

export default function User({users, posts, toggleFavorite, toggleFollow}) {

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
        toggleFavorite={toggleFavorite}
        isFavorite={post.isFavorite}
      />
    )
  }
  return(
   
    <div>
      {user && <div className="user">
        <img src={user.avatar} alt="" />
        <p>{`${user.first_name} ${user.last_name}`}</p>
        <a href="#">{user.email}</a>
        <br />
        <button 
          id={user.id}
          onClick={toggleFollow}
        >
          {user.following ? "Unfollow" : "follow"}
        </button>
        <br />
        <a href="#">{user.website}</a>
      </div>}
      {postElements}
    </div>
  )
  
}