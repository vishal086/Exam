import React, { useState } from 'react';
import Home from './Component/Home';
import './App.css';

function App() {
  const [start, setStart] = useState(false);

  const handleStartExam = () => {
    if (window.confirm("Do you want to start exam?"))
      {
        setStart(true);
      }
  };

  return (
    <>
      <div className="App">
       {
        !start ?  <button onClick={handleStartExam} className="start-btn"> Start Exam</button>
       : 
        <Home duration={60} />
      }
      </div>
    </>
  );
}

export default App;
