import React, { useState, useEffect } from 'react';

function Counter({ duration, onTimeUp }) 
{

  const [timeLeft, setTimeLeft] = useState(duration * 60); 

  useEffect(() => {
    if(timeLeft <= 0) 
    {
      onTimeUp();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  },[timeLeft, onTimeUp]);


   const formatTime = (seconds) => {
     const min = Math.floor(seconds / 60);
     const sec = seconds % 60;
     return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <>
      <div className="timer">
        <p>Time Left: {formatTime(timeLeft)}</p>
      </div>
    </>
  );
}

export default Counter;
