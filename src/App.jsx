import "./App.css";
// import Key from "./Key.jsx";
// import Keyboard from "./Keyboard";
import GameBoard from "./Gameboard";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<div className="flex items-center justify-center w-screen h-screen">
				<div className="flex items-center justify-center h-2/3 w-5/6 lg:h-3/4 lg:w-1/2">
					<GameBoard />
				</div>
			</div>
		</>
	);
}

export default App;
