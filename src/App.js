import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.js';
import Posts from './components/Posts.js';
import Users from './components/Users.js';
import Favorites from './components/Favorites.js';
import './css/App.css';

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUsers(json))
  }

  const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setPosts(json.map((post) => {
      return {...post, isFavorite: false, key: post.id}
    })))
  }

  const getComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => setComments(json))
  }

  const fetchData = () => {
    getUsers()
    getPosts()
    getComments()
  }


  useEffect(() => {
    fetchData()
  }, [])

  const toggleFavorite = (e) => {
    let selectedPostId = e.currentTarget.id
    setPosts((prev) => prev.map((post) =>  selectedPostId == post.id ?  {...post, isFavorite: !post.isFavorite} : post))
  }

  return (
    <Router>
      <Navbar />
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Posts posts={posts} toggleFavorite={(e) => toggleFavorite(e)} />}></Route>
            <Route path="/favorites" element={<Favorites posts={posts} toggleFavorite={(e) => toggleFavorite(e)} />}></Route>
            <Route path="/users" element={<Users users={users} />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
