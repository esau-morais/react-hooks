import { useState, useEffect } from "react";

function IntervalHookCounter() {
	// Set counter state
	const [counter, setCounter] = useState(0);
	// Add 1 to previous counter
	function tick() {
		// You could use setCounter(counter + 1);¹
		setCounter((prevCounter) => prevCounter + 1);
	}

	useEffect(
		() => {
			// 1 second Interval between the tick and another
			const interval = setInterval(tick, 1000);

			return () => {
				// Clear the interval
				clearInterval(interval);
			};
		},
		[
			/* counter¹ */
		]
	);

	return (
		<>
			<br />
			{/* Return counter value */}
			<h3>Interval Counter {counter} (useEffect)</h3>
			<br />
			<hr />
		</>
	);
}

export default IntervalHookCounter;
