import { useContext } from 'react';
import { CountContext } from './index';

function CounterOne() {
  const countContext = useContext(CountContext);

  return (
    <>
      <h3>{countContext.countState}</h3>
      <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </>
  )
}

export default CounterOne;
