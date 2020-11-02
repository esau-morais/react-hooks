import React, { useReducer, createContext } from 'react';
import CounterOne from "./counterOne";
import CounterTwo from "./counterTwo";
import CounterThree from "./counterThree";

export const CountContext = createContext();

// counter initial value
const initialState = 0;

const reducer = (state, action) => {
  // action for all of the buttons
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ExampleFour() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <h3>Count {count} (useReducer + useContext)</h3>

      <CounterOne />
      <CounterTwo />
      <CounterThree />

      <br />
      <hr />
    </CountContext.Provider>
  )
}

export default ExampleFour;
