import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.js';
import Posts from './components/Posts.js';
import ViewPost from './components/ViewPost.js';
import Users from './components/Users.js';
import User from './components/User.js';
import Favorites from './components/Favorites.js';
import Following from './components/Following.js';
import './css/App.css';

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

  const getUsers = () => {
    if (!window.localStorage.getItem('users')) {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => window.localStorage.setItem('users', JSON.stringify(json.map((user) => {
        return {...user, following: false, key: user.id}
      }))))
      .then(json => setUsers(JSON.parse(window.localStorage.getItem('users'))))
    } else {
      setUsers(JSON.parse(window.localStorage.getItem('users')))
    }
  }

  const getPosts = () => {
    if (!window.localStorage.getItem('posts')) {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => window.localStorage.setItem('posts', JSON.stringify(json.map((post) => {
        return {...post, isFavorite: false, key: post.id}
      }))))
      .then(() => setPosts(JSON.parse(window.localStorage.getItem('posts'))))
    } else {
      setPosts(JSON.parse(window.localStorage.getItem('posts')))
    }
  }

  const fetchData = () => {
    getUsers()
    getPosts()
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  const toggleFavorite = (e) => {
    window.localStorage.setItem('posts', JSON.stringify(JSON.parse(window.localStorage.getItem('posts')).map((post) => {
      return e.currentTarget.id == post.id ? {...post, isFavorite: !post.isFavorite} : post
    })))
    setPosts(JSON.parse(window.localStorage.getItem('posts')))
  }

  const toggleFollow = (e) => {
    window.localStorage.setItem('users', JSON.stringify(JSON.parse(window.localStorage.getItem('users')).map((user) => {
      return e.currentTarget.id == user.id ? {...user, following: !user.following} : user
    })))
    setUsers(JSON.parse(window.localStorage.getItem('users')))
  }

  return (
    <Router>
      <Navbar />
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Posts posts={posts} toggleFavorite={(e) => toggleFavorite(e)} />}></Route>
            <Route path="/post/:id" element={<ViewPost posts={posts} users={users}/>}></Route>
            <Route path="*" element={<Posts posts={posts} toggleFavorite={(e) => toggleFavorite(e)} />}></Route>
            <Route path="/favorites" element={<Favorites posts={posts} toggleFavorite={(e) => toggleFavorite(e)} />}></Route>
            <Route path="/users" element={<Users users={users} toggleFollow={(e) => toggleFollow(e)} />}></Route>
            <Route path="/user/:id" element={<User users={users} posts={posts} toggleFollow={(e) => toggleFollow(e)} toggleFavorite={(e) => toggleFavorite(e)} />}></Route>
            <Route path="/following" element={<Following users={users} toggleFollow={(e) => toggleFollow(e)} />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
