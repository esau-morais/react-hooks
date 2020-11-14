import { useState, useEffect, useRef } from 'react';

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <>
      <h3>Timer {timer} (useRef)</h3>
      <button onClick={() => clearInterval(intervalRef.current)}>Clear timer</button>
    </>
  )
}

export default HookTimer;
