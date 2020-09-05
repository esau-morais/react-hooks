import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../index";

function ContextConsumer() {
	const user = useContext(UserContext);
	const channel = useContext(ChannelContext);

	return (
		<>
			<br />
			<p>
				<h3>useContext</h3>
				{user} → {channel}
			</p>
		</>
	);
}

export default ContextConsumer;
