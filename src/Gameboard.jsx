import GameBoardCenter from "./GameBoardCenter";
import "./GameBoardCenter.css";
import { useState } from "react";

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
			<div className="col-start-4 row-start-1 col-span-1 row-span-1 h-full w-full flex justify-start items-center sm:justify-center sm:items-start md:justify-end md:items-center lg:justify-center lg:items-start">
				<div
					className="w-full h-1/2 mx-0 sm:h-3/4 sm:w-1/2 md:h-1/2 md:w-3/4 lg:w-1/2"
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

			<div className="col-start-1 row-start-1 col-span-1 row-span-1 h-full w-full flex justify-start items-center sm:justify-center sm:items-start md:justify-start md:items-center lg:justify-center lg:items-start">
				<div
					className="w-full h-1/2 mx-0 sm:h-3/4 sm:w-1/2 md:h-1/2 md:w-3/4 lg:w-1/2"
					onClick={(event) => handleClick(event)}
					data-content="rda"
				>
					<img
						src="rda.jpg"
						alt="project rda"
						className="h-full w-full object-cover rounded-2xl shadow-custom filter sepia transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:sepia-0"
					/>
				</div>
			</div>

			<div className="col-span-1 row-span-1 h-full w-full flex col-start-2 row-start-1 justify-end items-center sm:col-start-1 sm:row-start-3 sm:justify-center sm:items-end md:justify-start md:items-center lg:justify-center lg:items-end">
				<div
					className="w-full h-1/2 mx-0 sm:h-3/4 sm:w-1/2 md:h-1/2 md:w-3/4 lg:w-1/2"
					onClick={(event) => handleClick(event)}
					data-content="pnp"
				>
					<img
						src="pay_and_play.jpg"
						alt="project pay and play"
						className="h-full w-full object-cover rounded-2xl shadow-custom filter sepia transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:sepia-0"
					/>
				</div>
			</div>

			<div className="col-start-3 row-start-1 justify-end items-center sm:col-start-4 sm:row-start-3 col-span-1 row-span-1 h-full w-full flex sm:justify-center sm:items-end md:justify-end md:items-center lg:justify-center lg:items-end">
				<div
					className=" w-full h-1/2 mx-0 sm:h-3/4 sm:w-1/2 md:h-1/2 md:w-3/4 lg:w-1/2"
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
				className="h-full w-full row-start-2 row-span-2 col-span-4 sm:col-start-2 sm:row-start-1 sm:col-span-2 sm:row-span-3 sm:mx-auto sm:my-auto md:h-3/4 md:w-full md:row-span-3 lg:h-full lg:w-full row-start-2 row-span-2 col-span-4 flip-card"
			>
				{/* <div className="flip-card"> */}
				<GameBoardCenter isFlipped={isFlipped} backContent={backContent} />
				{/* </div> */}
			</div>
		</div>
	);
}

export default GameBoard;
