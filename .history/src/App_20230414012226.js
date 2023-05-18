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
  const [toTop,setToTop] = useState('false')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(post => setPost(post))
  }, [type])

  useEffect(() => {
    const handleScroll = () => {
      setToTop(window.scrollY>=200)
    }

    window.addEventListener('scroll',handleScroll)
  }, []);

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
          <li key={posts.id}>{posts.title||posts.name}</li>
        ))}
      </ul>
      {toTop && (
        <button style={{
          position: 'fixed',
          right:20,
          bottom:20
        }}>
        Turn Around
        </button>
      )}
    </div>
  )
}

export default App
