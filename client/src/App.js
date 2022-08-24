import './App.css';
import { useState, useEffect, useRef } from 'react'

function App() {
  const [posts, setPosts] = useState([])
  const form = useRef()
  useEffect(() => {
    const getPosts = async () => {
      try {
        let req = await fetch('http://localhost:3100/articles')
        let res = await req.json()
        if (req.ok) {
          setPosts(res)
        } else {
          alert('The posts could not be loaded')
        }
      } catch (error) {
        alert('Posts could not be loaded')
      }
    } 
    getPosts()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(form.current)
    let req = await fetch('http://localhost:3100/login', {
      method: 'POST',
      body: data
    })
    if (req.ok) {
      alert('You have logged in')
    } else {
      alert('Invalid email/password')
    }
  }

  return (
    <div className="App">
      <h2>News Feed</h2>
      {
        posts.map((post) => {
          return(
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
              <hr></hr>
            </div>
          )
        })
      }
      <h2>Log In</h2>
      <form onSubmit={handleSubmit} ref={form}>
        <input name="email" type="email" placeholder='Email' /><br />
        <input name="password" type="password" placeholder='Password' /><br />
        <input type="submit"  /><br />
      </form>
    </div>
  );
}

export default App;
