import React from "react";
import CounterOne from "./Example1/counterOne";
import CounterTwo from "./Example2/counterTwo";
import CounterThree from "./Example3/counterThree";
import ExampleFour from "./Example4";

function UseReducer() {
	return (
		<>
			<h2>useReducer</h2>
			<br />
			<CounterOne />
			<CounterTwo />
			<CounterThree />
      <ExampleFour />
		</>
	);
}

export default UseReducer;
