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
  const handleSubmit = () => {

  }
  return <div style={{ padding: 32 }}>
    {course.map(course =>{
      <div key={course.id}>
        <input type="radio" />
        {course.name}
      </div>
    })}
  </div>;
}

export default App;
