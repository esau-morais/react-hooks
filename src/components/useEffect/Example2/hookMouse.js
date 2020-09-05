import React, { useState, useEffect } from "react";

function HookCounter() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const logMousePosition = e => {
		console.log("Mouse is moving");
		setX(e.clientX);
		setY(e.clientY);
	};

	useEffect(() => {
		console.log("Mouse called");
		window.addEventListener("mousemove", logMousePosition);
	});

	return (
		<>
			<br />
			<h3>Mouse drag (useEffect)</h3>
			<p>X - {x}</p> <br />
			<p>Y - {y}</p>
			<br />
			<hr />
		</>
	);
}

export default HookCounter;
