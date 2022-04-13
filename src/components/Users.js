import User from './User.js';
import { NavLink, useParams, useNavigate } from 'react-router-dom';

export default function Users({users}) {
  let { username } = useParams()
  let navigate = useNavigate()
  const userElements = users.map((user) => {
    return(
      <NavLink to={`/user/${user.id}`}>
        <h1>{user.username}</h1>
      </NavLink>
      )
  })

  return(
    <div className="users">
      {userElements}
    </div>
  )
}