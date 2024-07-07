import "./App.css";
// import Key from "./Key.jsx";
// import Keyboard from "./Keyboard";
import { useState } from "react";
import Instructions from "./Instructions";
import GameBoard from "./Gameboard";
import Navbar from "./Navbar";

function App() {
	return (
		<div className="w-full h-full bg-background-color">
			<Navbar />
			<Instructions />
			<div className="flex items-center justify-center h-[calc(100vh - 15vh)] mx-auto w-3/4 bg-background-color w-full h-full">
				<GameBoard />
			</div>
			<div className="bg-shirtBlue h-[5vh] w-full"></div>
		</div>
	);
}

export default App;
