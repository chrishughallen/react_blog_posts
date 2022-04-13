import { NavLink } from 'react-router-dom';
import '../css/User.css';

export default function Users({users, posts, toggleFollow}) {
  console.log(users)

  const userElements = users.map((user) => {
    let articleCount = posts.filter((post) => post.userId == user.id).length
    return(
      <div className="user">
        <img src={user.avatar} alt="" />
        <br />
        <a href="#">{user.email}</a>
        <NavLink to={`/user/${user.id}`}>
          <p>{`${user.first_name} ${user.last_name}`}</p>
        </NavLink>
        <p>{articleCount} articles</p>
        <button 
          id={user.id}
          onClick={toggleFollow}
        >
          {user.following ? "Unfollow" : "follow"}
        </button>
      </div>
      )
  })

  return(
    <div className="users">
      {userElements}
    </div>
  )
}