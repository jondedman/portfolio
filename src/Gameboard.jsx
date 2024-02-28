import GameBoardCenter from "./GameBoardCenter";
import "./GameBoardCenter.css";
import React, { useState } from "react";

function GameBoard() {
	const [isFlipped, setIsFlipped] = useState(false);
	const [backContent, setBackContent] = useState("");
	const handleClick = (event) => {
		console.log("clicked in gameboard handleclick");
		const target = event.currentTarget;
		console.log(`target: ${target.dataset.content}`);

		if (target.dataset.content) {
			const content = target.dataset.content;
			setIsFlipped(!isFlipped);
			setBackContent(content);
			console.log(backContent);
		}
	};
	return (
		<div className="grid grid-cols-4 grid-rows-3 gap-4 py-4 px-8 border-1 border-black h-screen w-full bg-background-color gap-2">
			<div className="sm:col-start-4 sm:row-start-1 sm:col-span-1 sm:row-span-1 sm:h-full sm:w-full flex sm:justify-center sm:items-start justify-start items-center ">
				<div
					className="sm:h-3/4 sm:w-1/2 w-full h-1/2 mx-0"
					onClick={(event) => handleClick(event)}
					data-content="jaipur"
				>
					<img
						src="jaipur.jpg"
						alt="jaipur"
						className="h-full w-full object-cover rounded-2xl shadow-custom filter sepia transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:sepia-0"
					/>
				</div>
			</div>

			<div className="sm:col-start-1 sm:row-start-1 sm:col-span-1 sm:row-span-1 md:h-full sm:w-full flex sm:justify-center sm:items-start justify-start items-center">
				<div
					onClick={(event) => handleClick(event)}
					className="sm:h-3/4 sm:w-1/2 w-full h-1/2 mx-0"
					data-content="rda"
				>
					<img
						src="rda.jpg"
						alt="project rda"
						className="h-full w-full object-cover rounded-2xl shadow-custom filter sepia transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:sepia-0"
					/>
				</div>
			</div>

			<div className="sm:col-start-1 sm:row-start-3 sm:col-span-1 sm:row-span-1 sm:h-full sm:w-full flex sm:justify-center sm:items-end col-start-2 row-start-1 justify-end items-center">
				<div
					onClick={(event) => handleClick(event)}
					className="sm:h-3/4 sm:w-1/2 w-full h-1/2 mx-0"
					data-content="pnp"
				>
					<img
						src="pay_and_play.jpg"
						alt="project pay and play"
						className="h-full w-full object-cover rounded-2xl shadow-custom filter sepia transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:sepia-0"
					/>
				</div>
			</div>

			<div className="sm:col-start-4 sm:row-start-3 sm:col-span-1 sm:row-span-1 sm:h-full sm:w-full flex sm:justify-center sm:items-end col-start-3 row-start-1 justify-end items-center">
				<div
					className="sm:h-3/4 sm:w-1/2 w-full h-1/2 mx-0"
					onClick={(event) => handleClick(event)}
					data-content="what can i eat"
				>
					<img
						src="what_can_i_eat_logo.png"
						alt="what can i eat"
						className="h-full w-full object-cover rounded-2xl shadow-custom filter sepia transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:sepia-0"
					/>
				</div>
			</div>
			<div
				onClick={(event) => handleClick(event)}
				data-content="cv"
				className="sm:col-start-2 sm:row-start-1 sm:col-span-2 sm:row-span-3 h-full w-full lg:h-5/6 lg:w-5/6 sm:mx-auto sm:my-auto row-start-2 row-span-2 col-span-4 flip-card"
				// onClick={(event) => handleClick(event)}
				// onMouseDown={() => handleClick("cv")}
				// onTouchStart={() => handleClick("cv")}
			>
				{/* <div
					className="h-full"
					data-content="cv"
					onClick={(event) => handleClick(event)}
				> */}
				<GameBoardCenter isFlipped={isFlipped} backContent={backContent} />
				{/* </div> */}
			</div>
		</div>
	);
}

export default GameBoard;
