import { NavLink } from 'react-router-dom';
import '../css/User.css';

export default function Users({users, toggleFollow}) {
  const userElements = users.map((user) => {
    return(
      <div className="user">
        <NavLink to={`/user/${user.id}`}>
          <h1>{user.username}</h1>
        </NavLink>
        <button 
          id={user.id}
          onClick={toggleFollow}
          className={`button-primary ${user.following ? "button-secondary" : "button-primary"}`}
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