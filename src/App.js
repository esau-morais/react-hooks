import "./styles.css";
import UseState from "./components/useState";
import UseEffect from "./components/useEffect";
import UseContext from "./components/useContext";
import UseReducer from "./components/useReducer";
import UseCallback from "./components/useCallback";
import UseMemo from "./components/useMemo";
import UseRef from "./components/useRef";
import CustomHooks from "./components/customHooks";

export default function App() {
	return (
		<>
			<h1>React Hooks</h1>

			<UseState />
			<UseEffect />
			<UseContext />
			<UseReducer />
      <UseCallback />
      <UseMemo />
      <UseRef />
      <CustomHooks />
 		</>
	);
}
