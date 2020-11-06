import { useState } from "react";

function HookCounter() {
	const [count, setCount] = useState(0);

	return (
		<>
			<br />
			<h3>Counter (with useState)</h3>
			<button onClick={() => setCount(count + 1)}>Counter {count}</button>
			<br />
			<br />
			<hr />
		</>
	);
}

export default HookCounter;
