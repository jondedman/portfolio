import "./App.css";
// import Key from "./Key.jsx";
// import Keyboard from "./Keyboard";
import Instructions from "./Instructions";
import GameBoard from "./Gameboard";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<div className="w-full h-full bg-background-color">
			<div className="flex justify-center items-center bg-banner-color h-[8vh] w-full">
				<h1 className="text-2xl font-bold text-center font-poppins text-background-color">
					Jon Dedman - Portfolio
				</h1>
			</div>
			<div className="flex justify-around items-center mx-auto bg-banner-color w-full text-background-color p-2">
				<h2>+447932563406</h2>
				<h2>jonathandedman@hotmail.com</h2>
				<h2>
					{" "}
					<a
						href="https://github.com/jondedman"
						target="_blank"
						rel="noreferrer"
						className="underline"
					>
						Github
					</a>
				</h2>
				<h2>
					{" "}
					<a
						href="https://linkedin.com/in/jon-dedman"
						target="_blank"
						rel="noreferrer"
						className="underline"
					>
						LinkedIn
					</a>
				</h2>
			</div>
			<Instructions />
			<div className="flex items-center justify-center h-[calc(100vh - 15vh)] mx-auto w-3/4 bg-background-color xs:w-full xs:h-full">
				<GameBoard />
			</div>
			<div className="bg-banner-color h-[5vh] w-full"></div>
		</div>
	);
}

export default App;
