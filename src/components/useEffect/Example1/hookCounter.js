import { useState, useEffect } from "react";

function HookCounter() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	useEffect(() => {
		console.log("UseEffect - Updating document title...");
		document.title = `You clicked ${count} times`;
	}, [count]);

	return (
		<>
			<h3>Counter (useEffect)</h3>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
			<button onClick={() => setCount(count + 1)}>Counter {count}</button>
			<br />
			<br />
			<hr />
		</>
	);
}

export default HookCounter;
