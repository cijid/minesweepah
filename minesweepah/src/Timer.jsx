import { useState, useEffect } from 'react'

//Timer handles the incrementing timer for the minesweeper board
function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const trackTime = setInterval(() => {
      setSeconds((secondTimer) => secondTimer + 1);
    }, 1000);

    return () => clearInterval(trackTime)
  }, []);


  return (
    <p>{seconds}</p>
  );
}

export default Timer