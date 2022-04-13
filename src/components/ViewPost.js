import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ViewPost({posts, users}) {
  const [post, setPost] = useState({})
  const params = useParams()
  console.log(post)

  useEffect(() => {
    setPost((posts.filter((post) => post.id == params.id))[0])
  }, [posts])
  return(
    <div className="view-post">
      {post && 
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      }
    </div>
  )
}