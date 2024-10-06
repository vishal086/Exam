import React, { useState, useEffect } from 'react';
import Counter from './Counter';

function Home({ duration }) {


   const [vol, setVol] = useState(0);
   const [terminate, setTerminate] = useState(false);
   const [complete, setComplete] = useState(false);

   useEffect(() => {
     if(document.documentElement.requestFullscreen) 
     {
        document.documentElement.requestFullscreen();
     }

    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        if(vol === 0) 
        {
           alert("Please do not exit full-screen mode!");
           setVol(vol + 1);
           document.documentElement.requestFullscreen();
        } 
        else if(vol === 1) 
        {
           setTerminate(true);
        }
      }
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    };
  }, [vol]);

  const onTimeUp = () => {
    setComplete(true);
  };

  const handleSubmit = () => {
    if(window.confirm("Do you sure you want to submit the exam?")) 
    {
      setComplete(true);
    }
  };

  if (terminate) 
  {
    return <h2>Exam Terminated</h2>;
  }


  if(complete) 
  {
    return <h2>Exam Completed successfully!</h2>;
  }

  return (
    <>
    <div className="exam-container">
       <h1>Exam in Progress</h1>
       <Counter duration={duration} onTimeUp={onTimeUp} />
       <button onClick={handleSubmit} className="submit-btn">Submit Exam</button>
    </div>
    </>
  );
}

export default Home;
