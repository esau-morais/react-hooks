import React, { createContext } from "react";
import UsernameProvider from "./Example1/usernameProvider";
import ContextConsumer from "./Example2/consumer";

export const UserContext = createContext();
export const ChannelContext = createContext();

function UseContext() {
	return (
		<>
			<br />
			<h3>useContext</h3>
			<br />
			<UserContext.Provider value={"@esau_morais"}>
				<ChannelContext.Provider value={"BTC2020"}>
					<UsernameProvider />
					<ContextConsumer />
				</ChannelContext.Provider>
			</UserContext.Provider>
			<br />
			<hr />
		</>
	);
}

export default UseContext;
