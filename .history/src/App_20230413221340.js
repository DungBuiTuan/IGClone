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
const tab = ['posts','comments','albums']

function App () {
  const [title, setTitle] = useState('')
  const [post, setPost] = useState([])
  const [type,setType]  = useState('posts')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(post => setPost(post))
  }, [type])
  return (
    <div style={{ padding: 32 }}>
      {tab.map(tab =>(
        <button 
        style={type === tab ?{
          color:'#fff',
          backgroundColor:'#333',
        }:{}}
        onClick={() => setType(tab)}
        key={tab}>
        {tab}
        </button>
      ))}
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <ul>
        {post.map(posts => (
          <li key={posts.id}>{posts.title}||{posts.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
