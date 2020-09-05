import React from "react";

import HookCounter from "./Example1/hookCounter";
import HookMouse from "./Example2/hookMouse";
import MouseContainer from "./Example3/mouseContainer";
import IntervalHookCounter from "./Example4/intervalHookCounter";
import DataFetching from "./Example5/dataFetching";

function UseState() {
	return (
		<>
			<h3>useEffect</h3>
			<br />
			<HookCounter />
			<HookMouse />
			<MouseContainer />
			<IntervalHookCounter />
			<DataFetching />
		</>
	);
}

export default UseState;
