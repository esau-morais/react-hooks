import React from "react";

import "./styles.css";
import UseState from "./components/useState";
import UseEffect from "./components/useEffect";
import UseContext from "./components/useContext";
import UseReducer from "./components/useReducer";

export default function App() {
	return (
		<>
			<h1>React Hooks</h1>

			<UseState />
			<UseEffect />
			<UseContext />
			<UseReducer />
		</>
	);
}
