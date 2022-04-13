import { NavLink } from 'react-router-dom';

export default function Following({users, toggleFollow}) {
  let followedUsers = users.filter((user) => user.following)
  console.log(followedUsers)

  const userElements = followedUsers.map((user) => {
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
    <div className="following">
      <div>{userElements.length > 0 && userElements}</div>
      <div>{userElements.length == 0 && <p>You aren't following anyone!</p>}</div>
    </div>
  )
}