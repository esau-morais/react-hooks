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

function CounterOne() {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<h3>Counter {count} (simple state & action)</h3>
			{/* onClick, if the dispatch receives a value, it will show the case function */}
			<button onClick={() => dispatch("increment")}>Increment</button>
			<button onClick={() => dispatch("decrement")}>Decrement</button>
			<button onClick={() => dispatch("reset")}>Reset</button>
			<br />
			<hr />
		</>
	);
}

export default CounterOne;
