import useCounter from '../../../hooks/useCounter';

function UseCounter() {
  const [count, increment, decrement, reset] = useCounter();

  return (
    <>
      <h3>Count {count} (useCounter)</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default UseCounter;
