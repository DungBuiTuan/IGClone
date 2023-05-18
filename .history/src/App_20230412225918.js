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


function App() {
  const [job,setJob] = useState('')
  const [jobs,setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    console.log(storageJobs)
    return storageJobs
  })

  const handleSubmit = () =>{
    setJobs(prev => {
      const newJobs = [...prev,job]
      const jsonJob = JSON.stringify(newJobs)
      localStorage.setItem('jobs',jsonJob)
      return newJobs
    })
  }

  return (
    <div style={{ padding: 32 }}>
    <input  
    value={job}
    onChange={e => setJob(e.target.value)}
    />
    <button onClick={handleSubmit}>add</button>

    <ul>
    {jobs.map((job,index) =>{
      <li key={index}>{job}</li>
    })}
    </ul>
  </div>
  )
}

export default App;
