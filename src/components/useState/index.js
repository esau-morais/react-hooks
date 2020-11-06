import HookCounter from "./Example1/hookCounter";
import HookCounterTwo from "./Example2/hookCounterTwo";
import HookInputThree from "./Example3/hookInputThree";
import HookItemsFour from "./Example4/hookItemsFour";

function UseState() {
	return (
		<>
			<h2>useState</h2>
			<HookCounter />
			<HookCounterTwo />
			<HookInputThree />
			<HookItemsFour />
		</>
	);
}

export default UseState;
