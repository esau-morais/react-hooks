import React, { useReducer } from "react";
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

function CounterThree() {
	const [count, dispatch] = useReducer(reducer, initialState);
	const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

	return (
		<>
			<h3>1st Counter {count}</h3>
			{/* onClick, if the dispatch receives a value, it will show the case function */}
			{/* Incrementer, decrementer and reseter 1 */}
			<button onClick={() => dispatch("increment")}>Increment</button>
			<button onClick={() => dispatch("decrement")}>Decrement</button>
			<button onClick={() => dispatch("reset")}>Reset</button>

			<br />
			<hr />

			<h3>2nd Counter {countTwo}</h3>
			{/* Incrementer, decrementer and reseter 1 */}
			<button onClick={() => dispatchTwo("increment")}>Increment</button>
			<button onClick={() => dispatchTwo("decrement")}>Decrement</button>
			<button onClick={() => dispatchTwo("reset")}>Reset</button>
		</>
	);
}

export default CounterThree;
