import React from "react";

import HookCounter from "./Example1/hookCounter";
import HookCounterTwo from "./Example2/hookCounterTwo";
import HookInputThree from "./Example3/hookInputThree";
import HookItemsFour from "./Example4/hookItemsFour";

function UseState() {
	return (
		<>
			<h3>useState</h3>
			<HookCounter />
			<HookCounterTwo />
			<HookInputThree />
			<HookItemsFour />
		</>
	);
}

export default UseState;
