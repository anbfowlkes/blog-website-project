import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [posts, setPosts] = useState([])
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
  return (
    <div className="App">
      <h2>News Feed</h2>
      {
        posts.map((post) => {
          return(
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
