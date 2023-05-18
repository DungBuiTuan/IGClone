import React from 'react'
import './App.css'
// import Header from './component/Header/Header';
import { useEffect } from 'react'
import { useState } from 'react'
// function App() {
//   return (
//     <div className="App">
//       {/*Header*/}
//       <Header/>
//     </div>
//   );
// }

function App () {
  const [title, setTitle] = useState('')
  const [post, setPost] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(post => setPost(post))
  }, [])
  return (
    <div style={{ padding: 32 }}>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <ul/>
        {post.map(posts => (
          <li key={posts.id}>{posts.title}</li>
        ))}

    </div>
  )
}

export default App
