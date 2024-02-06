import "./App.css";
// import Key from "./Key.jsx";
// import Keyboard from "./Keyboard";
import GameBoard from "./Gameboard";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<div className="w-full h-full bg-background-color">
			<div className="bg-banner-color h-[10vh] w-full"></div>
			<div className="flex items-center justify-center h-[calc(100vh - 15vh)] mx-auto w-3/4 bg-background-color">
				<GameBoard />
			</div>
			<div className="bg-banner-color h-[5vh] w-full"></div>
		</div>
	);
}

export default App;
