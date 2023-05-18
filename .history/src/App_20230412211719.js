import React from 'react';
import './App.css';
// import Header from './component/Header/Header';
import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       {/*Header*/}
//       <Header/>
//     </div>
//   );
// }
const gifts = [
  'Iphone X',
  'Iphone 11',
  'Iphone 12',
  'Iphone 13',
  'Iphone 14'
]
function App() {
  const [gift,setGift]=useState()
  return (
    <div style={{padding:32}}>
      <h1>{gift||'Do Not Have Gift'}</h1>
      <button>Get</button>
    </div>
  );
}

export default App;
