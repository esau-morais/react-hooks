import React from "react";
import CounterOne from "./Example1/counterOne";
import CounterTwo from "./Example2/counterTwo";
import CounterThree from "./Example3/counterThree";

function UseReducer() {
	return (
		<>
			<h3>useReducer</h3>
			<br />
			<CounterOne />
			<CounterTwo />
			<CounterThree />
		</>
	);
}

export default UseReducer;
