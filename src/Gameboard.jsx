import GameBoardCenter from "./GameBoardCenter";
import "./GameBoardCenter.css";
import React, { useState } from "react";
import backgroundImage from "/experience.jpg";

function GameBoard() {
	const [isFlipped, setIsFlipped] = useState(false);
	const [backContent, setBackContent] = useState("");
	const handleClick = (content) => {
		console.log("clicked");
		setIsFlipped(!isFlipped);
		setBackContent(content);
	};
	return (
		<div
			className="grid grid-cols-4 grid-rows-3 gap-6 p-4 border-1 border-black h-full w-full bg-background-color rounded-lg shadow-lg"
			// className="grid grid-cols-4 grid-rows-3 gap-6 p-4 border-1 border-black h-full w-full bg-gradient-to-r from-monopoly-green to-green-300 rounded-lg shadow-lg"
			// style={{
			// 	backgroundImage: `url(${backgroundImage})`,
			// 	backgroundSize: "cover",
			// 	backgroundRepeat: "no-repeat",
			// }}
		>
			<div className="col-start-1 row-start-1 col-span-1 row-span-1 monopoly-green border-2 border-black">
				<h2>add image</h2>
			</div>
			<div className="col-start-2 row-start-1 col-span-2 row-span-1 border-2 border-black p-2">
				<h2>add nav bar</h2>
			</div>
			<div className="col-start-4 row-start-1 col-span-1 row-span-1 monopoly-green border-2 border-black">
				<h2>add image 2</h2>
			</div>
			<div
				onClick={() => handleClick("jaipur")}
				className="col-start-4 row-start-2 col-span-1 row-span-1 monopoly-green border-2 border-black p-2"
			>
				<h2>Project: Jaipur</h2>
			</div>
			<div
				onClick={() => handleClick("jaipur")}
				className="col-start-1 row-start-2 col-span-1 row-span-1 monopoly-green border-2 border-black p-2"
			>
				<h2>Project: to be added rdautos</h2>
			</div>
			<div
				onClick={() => handleClick("jaipur")}
				className="col-start-1 row-start-3 col-span-1 row-span-1 monopoly-green border-2 border-black p-2"
			>
				<h2>Project: to be added venues pay and play</h2>
			</div>
			<div
				onClick={() => handleClick("what can i eat")}
				className="flex justify-end col-start-4 row-start-3 col-span-1 row-span-1 border-2 border-black"
			>
				<div>
					<img
						src="project1.jpg"
						alt="what can i eat"
						// className="transform rotate-90 h-full w-full rounded-lg border-2 border-white object-contain"
					/>
				</div>
			</div>

			<GameBoardCenter isFlipped={isFlipped} backContent={backContent} />
			{/* </div> */}
		</div>
	);
}

export default GameBoard;
