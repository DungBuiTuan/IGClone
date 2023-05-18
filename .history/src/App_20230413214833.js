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
  const [show,setShow] = useState(false)

  const [title, setTitle] = useState('')
  const [post, setPost] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(post => setPost(post))
  }, [])
  return (
    <div style={{ padding: 32 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && 'here'}
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <ul>
        {post.map(posts => (
          <li key={posts.id}>{posts.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
