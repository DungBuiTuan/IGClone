import React from "react";
import "./App.css";
// import Header from './component/Header/Header';
import { useState } from "react";

// function App() {
//   return (
//     <div className="App">
//       {/*Header*/}
//       <Header/>
//     </div>
//   );
// }
const course = [
  { id: 1, name: "Html" },
  { id: 2, name: "Html1" },
  { id: 3, name: "Html2" },
];

function App() {
  const[check,setCheck]=useState()
  const handleSubmit = () => {
    console.log({id:check});
  }
  return (<div style={{ padding: 32 }}>
    {course.map(courses =>(
      <div key={courses.id}>
        <input type="radio"
        check = {check === courses.id}
        onChange={() => setCheck(courses.id)}
        />
        {courses.name}
      </div>
    ))}
    <button onClick={handleSubmit}>Register</button>
  </div>
  )
}

export default App;
