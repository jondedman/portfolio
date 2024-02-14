import GameBoardCenter from "./GameBoardCenter";
import "./GameBoardCenter.css";
import React, { useState } from "react";

function GameBoard() {
	const [isFlipped, setIsFlipped] = useState(false);
	const [backContent, setBackContent] = useState("");
	const handleClick = (content) => {
		console.log("clicked in gameboard");
		setIsFlipped(!isFlipped);
		setBackContent(content);
		console.log(backContent);
	};
	return (
		<div className="grid grid-cols-4 grid-rows-3 gap-4 py-4 px-8 border-1 border-black h-screen w-full bg-background-color xs:gap-2">
			<div className="md:col-start-4 md:row-start-1 md:col-span-1 md:row-span-1 md:h-full md:w-full flex md:justify-start md:items-end xs:justify-start xs:items-center ">
				<div
					className="md:h-3/4 md:w-1/2 xs:w-full xs:h-1/2 xs:mx-0"
					onClick={() => handleClick("jaipur")}
				>
					<img
						src="jaipur.jpg"
						alt="jaipur"
						className="h-full w-full object-cover rounded-2xl shadow-custom filter sepia transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:sepia-0"
					/>
				</div>
			</div>

			<div className="md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-1 md:h-full md:w-full flex md:justify-end md:items-end xs:justify-start xs:items-center">
				<div
					onClick={() => handleClick("rda")}
					className="md:h-3/4 md:w-1/2 xs:w-full xs:h-1/2 xs:mx-0"
				>
					<img
						src="rda.jpg"
						alt="project rda"
						className="h-full w-full object-cover rounded-2xl shadow-custom filter sepia transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:sepia-0"
					/>
				</div>
			</div>

			<div className="md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-1 md:h-full md:w-full flex md:justify-end md:items-start xs:col-start-2 xs:row-start-1 xs:justify-end xs:items-center">
				<div
					onClick={() => handleClick("pnp")}
					className="md:h-3/4 md:w-1/2 xs:w-full xs:h-1/2 xs:mx-0"
				>
					<img
						src="pay_and_play.jpg"
						alt="project pay and play"
						className="h-full w-full object-cover rounded-2xl shadow-custom filter sepia transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:sepia-0"
					/>
				</div>
			</div>

			<div className="md:col-start-4 md:row-start-3 md:col-span-1 md:row-span-1 md:h-full md:w-full flex md:justify-start md:items-start xs:col-start-3 xs:row-start-1 xs:justify-end xs:items-center">
				<div
					className="md:h-3/4 md:w-1/2 xs:w-full xs:h-1/2 xs:mx-0"
					onClick={() => handleClick("what can i eat")}
				>
					<img
						src="what_can_i_eat_logo.png"
						alt="what can i eat"
						className="h-full w-full object-cover rounded-2xl shadow-custom filter sepia transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:sepia-0"
					/>
				</div>
			</div>
			<div
				className="md:col-start-2 md:row-start-1 md:col-span-2 md:row-span-3 md:h-5/6 md:w-5/6 md:mx-auto md:my-auto xs:h-full xs:w-full xs:row-start-2 xs:row-span-2 xs:col-span-4 flip-card"
				onClick={() => handleClick("cv")}
			>
				<GameBoardCenter isFlipped={isFlipped} backContent={backContent} />
			</div>
		</div>
	);
}

export default GameBoard;
