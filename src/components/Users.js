import User from './User.js';

export default function Users({users}) {
  const userElements = users.map((user) => <User key={user.userId} username={user.username}/>)

  return(
    <div className="users">
      <h1>Users</h1>
      {userElements}
    </div>
  )
}