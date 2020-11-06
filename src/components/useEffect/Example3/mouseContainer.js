import { useState } from "react";

import HookMouse from '../Example2/hookMouse'

function MouseContainer() {
	const [display, setDisplay] = useState(true);

	return (
		<>
			<br />
			<button onClick={() => setDisplay(!display)}>Toogle display</button>
      {display && <HookMouse /> }
			<br />
		</>
	);
}

export default MouseContainer;
