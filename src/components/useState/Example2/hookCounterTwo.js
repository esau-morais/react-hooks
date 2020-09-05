import React, { useState } from "react";

function HookCounterTwo() {
	const initialCount = 0;
	const [count, setCount] = useState(0);

	return (
		<>
			<br />
			<h3>Counter {count} (with previous state)</h3>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<br />
			<br />
			<hr />
		</>
	);
}

export default HookCounterTwo;
