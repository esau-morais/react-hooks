import { UserContext, ChannelContext } from "../index";

function UsernameProvider() {
	return (
		<>
			<h3>createContext</h3>
			<UserContext.Consumer>
				{(user) => {
					return (
						<ChannelContext.Consumer>
							{(channel) => {
								return (
									<p>
										{user} created a Discord channel called {channel}
									</p>
								);
							}}
						</ChannelContext.Consumer>
					);
				}}
			</UserContext.Consumer>
			<br />
			<hr />
		</>
	);
}

export default UsernameProvider;
