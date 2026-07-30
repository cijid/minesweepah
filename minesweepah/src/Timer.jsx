import { useState } from 'react'
import  useIntervalWhen  from './hooks/useIntervalWhen'

//Timer handles the incrementing timer for the minesweeper board
function Timer( {when} ) {
  const [seconds, setSeconds] = useState(0)
  useIntervalWhen(() => {
    setSeconds((secondTimer) => secondTimer + 1);
    },
    {ms: 1000, when, startImmediately: false}
    );
  return (
    <div className="timer" data-testid="timer" data-timer={when}>{seconds}</div>
  );
}

export default Timer







