import CounterOne from "./Example1/counterOne";
import CounterTwo from "./Example2/counterTwo";
import CounterThree from "./Example3/counterThree";
import ExampleFour from "./Example4";
import DataFetchingOne from "./Example5/dataFetchingOne";
import DataFetchingTwo from "./Example5/dataFetchingTwo";

function UseReducer() {
	return (
		<>
			<h2>useReducer</h2>
			<br />
			<CounterOne />
			<CounterTwo />
			<CounterThree />
      <ExampleFour />
      <DataFetchingOne />
      <DataFetchingTwo />
		</>
	);
}

export default UseReducer;
