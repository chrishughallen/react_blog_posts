import { NavLink } from 'react-router-dom';

export default function Following({users, toggleFollow}) {
  let followedUsers = users.filter((user) => user.following)
  console.log(followedUsers)

  const userElements = followedUsers.map((user) => {
    return(
      <div className="user">
        <img src={user.avatar} alt="" />
        <h1>{`${user.first_name} ${user.last_name}`}</h1>
        <NavLink to={`/user/${user.id}`}>
        <p>View {user.first_name}'s profule</p>
        </NavLink>
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
    <div className="following">
      <div>{userElements.length > 0 && userElements}</div>
      <div>{userElements.length == 0 && <p>You aren't following anyone!</p>}</div>
    </div>
  )
}