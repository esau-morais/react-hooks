import { useState } from "react";

const formStyles = {
	display: "flex",
	flexDirection: "column",
	width: "80%"
};

function HookCounterThree() {
	const [name, setName] = useState({
		firstName: "",
		lastName: ""
	});
	return (
		<>
			<br />
			<h3>Input name (useState with object)</h3>
			<form style={formStyles}>
				<input
					type="text"
					placeholder="First name"
					value={name.firstName}
					onChange={e =>
						setName({
							...name,
							firstName: e.target.value
						})
					}
				/>
				<input
					type="text"
					placeholder="Last name"
					value={name.lastName}
					onChange={e =>
						setName({
							...name,
							lastName: e.target.value
						})
					}
				/>
        <h3>{name.firstName} {name.lastName}</h3>
				<br />
			</form>
			<hr />
		</>
	);
}

export default HookCounterThree;
