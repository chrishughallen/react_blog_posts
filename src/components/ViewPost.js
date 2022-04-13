import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../css/ViewPost.css'
import '../css/User.css'

export default function ViewPost({posts, users}) {
  const params = useParams()
  const post = posts.find((post) => post.id == params.id)
  const author = users.find((user) => user.id == post?.userId)

  return(
    <section className="view-post">
      {post && 
        <article>
          <div className="view-post__post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
          <footer className="user">
            <img src={author.avatar} alt="" />
            <h5>Author: {`${author.first_name} ${author.last_name}`}</h5>
          </footer>
        </article>
      }
    </section>
  )
}