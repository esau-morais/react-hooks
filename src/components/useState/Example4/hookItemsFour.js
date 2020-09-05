import React, { useState } from "react";

function HookItemsFour() {
	const [items, setItems] = useState([]);

	function addItem() {
		setItems([
			...items,
			{
				id: items.length,
				value: Math.floor(Math.random() * 10) + 1
			}
		]);
	}

	return (
		<>
			<br />
			<h3>Items (useState with array)</h3>
			<button onClick={addItem}>Add item</button>
			<br />
			<ul>
				{items.map(item => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
			<br />
			<hr />
			<br />
		</>
	);
}

export default HookItemsFour;
