import GameBoardCenter from "./GameBoardCenter";
import "./GameBoardCenter.css";
// import Navbar from "./Navbar";
import React, { useState } from "react";
// import backgroundImage from "/experience.jpg";
import Instructions from "./Instructions";

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
			className="grid grid-cols-4 grid-rows-3 gap-4 py-8 px-8 border-1 border-black h-screen w-full bg-background-color"
			// className="grid grid-cols-4 grid-rows-3 gap-6 p-4 border-1 border-black h-full w-full bg-gradient-to-r from-monopoly-green to-green-300 rounded-lg shadow-lg"
			// style={{
			// 	backgroundImage: `url(${backgroundImage})`,
			// 	backgroundSize: "cover",
			// 	backgroundRepeat: "no-repeat",
			// }}
		>
			{/* <div className="col-start-1 row-start-1 col-span-1 row-span-1 monopoly-green border-2 border-black">
				<h2>Contact</h2>
				<ul>
					<li>LinkedIn</li>
					<li>GitHub</li>
					<li>Twitter</li>
				</ul>
			</div> */}
			{/* <div className="col-start-1 row-start-1 col-span-4 row-span-1 border-2 border-back p-2"> */}
			{/* <h1 className="text-3xl ">Jon Dedman portfolio</h1> */}
			{/* <div className="justify-center">
					<h1 className=" font-poppins opacity-75 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center mb-1">
						JON DEDMAN
					</h1>
				</div> */}
			<Instructions />
			{/* </div> */}
			{/* <div className="col-start-4 row-start-1 col-span-1 row-span-1">
				<h1>CV</h1>
			</div> */}

			<div className="col-start-4 row-start-1 col-span-1 row-span-1 h-full w-full flex justify-end items-end">
				<div
					className="h-3/4 w-3/4 mx-auto"
					onClick={() => handleClick("jaipur")}
					// className="col-start-4 row-start-2 col-span-1 row-span-1 h-3/4 w-3/4 rounded-2xl shadow-custom "
				>
					<img
						src="jaipur.jpg"
						alt="jaipur"
						// className="transform rotate-90 h-full w-full rounded-lg border-2 border-white object-contain"
						className="h-full w-full object-cover rounded-2xl shadow-custom filter sepia transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:sepia-0"
					/>
				</div>
			</div>

			<div className="col-start-1 row-start-1 col-span-1 row-span-1 h-full w-full flex justify-end items-end">
				<div
					onClick={() => handleClick("jaipur")}
					className="h-3/4 w-3/4 mx-auto"
				>
					<img
						src="rda.jpg"
						alt="project rda"
						// className="transform rotate-90 h-full w-full rounded-lg border-2 border-white object-contain"
						className="h-full w-full object-cover rounded-2xl shadow-custom filter sepia transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:sepia-0"
					/>
				</div>
			</div>

			<div className="col-start-1 row-start-3 col-span-1 row-span-1 h-full w-full flex justify-start items-start">
				<div
					onClick={() => handleClick("jaipur")}
					className="h-3/4 w-3/4 mx-auto"
				>
					<img
						src="pay_and_play.jpg"
						alt="project pay and play"
						// className="transform rotate-90 h-full w-full rounded-lg border-2 border-white object-contain"
						className="h-full w-full object-cover rounded-2xl shadow-custom filter sepia transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:sepia-0"
					/>
				</div>
			</div>

			<div className="col-start-4 row-start-3 col-span-1 row-span-1 h-full w-full flex justify-start items-start">
				<div
					className="h-3/4 w-3/4 mx-auto"
					onClick={() => handleClick("what can i eat")}
				>
					<img
						src="what_can_i_eat_logo.png"
						alt="what can i eat"
						// className="transform rotate-90 h-full w-full rounded-lg border-2 border-white object-contain"
						className="h-full w-full object-cover rounded-2xl shadow-custom filter sepia transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:sepia-0"
					/>
				</div>
			</div>

			<GameBoardCenter isFlipped={isFlipped} backContent={backContent} />
			{/* </div> */}
		</div>
	);
}

export default GameBoard;
