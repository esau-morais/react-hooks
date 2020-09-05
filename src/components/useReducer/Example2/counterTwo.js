import React, { useReducer } from "react";
// counter initial value
const initialState = {
	firstCounter: 0,
	secondCounter: 10
};

const reducer = (state, action) => {
	// action for all of the buttons
	switch (action.type) {
		case "increment":
			return {
				...state,
				firstCounter: state.firstCounter + action.value
			};
		case "decrement":
			return {
				...state,
				firstCounter: state.firstCounter - action.value
			};
		case "decrement2":
			return {
				...state,
				secondCounter: state.secondCounter - action.value
			};
		case "decrement3":
			return {
				...state,
				secondCounter: state.secondCounter - action.value
			};
		case "reset":
			return initialState;
		default:
			return state;
	}
};

function CounterTwo() {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<h3>1st Counter {count.firstCounter}</h3>
			{/* onClick, if the dispatch receives a value, it will show the case function */}
			{/* Increment and decrement 1 */}
			<button onClick={() => dispatch({ type: "increment", value: 1 })}>
				Increment
			</button>
			<button onClick={() => dispatch({ type: "decrement", value: 1 })}>
				Decrement
			</button>
			{/* Increment and decrement 5 */}
			<button onClick={() => dispatch({ type: "increment", value: 5 })}>
				Increment 5
			</button>
			<button onClick={() => dispatch({ type: "decrement", value: 5 })}>
				Decrement 5
			</button>

			<button onClick={() => dispatch({ type: "reset" })}>Reset both</button>

			<br />
			<hr />
			<br />

			{/* Another incrementer and decrementer */}
			<h3>2nd Counter {count.secondCounter}</h3>
			<button onClick={() => dispatch({ type: "increment2", value: 1 })}>
				Increment
			</button>
			<button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
				Decrement
			</button>
			<br />
			<hr />
		</>
	);
}

export default CounterTwo;
