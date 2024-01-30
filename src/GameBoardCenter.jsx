// import React, { useState } from "react";
import "./GameboardCenter.css";
import Experience from "./CV/Experience";
import Education from "./CV/Education";

function GameBoardCenter({ isFlipped, backContent }) {
	let content;

	switch (backContent) {
		case "experience":
			content = <Experience />;
			break;
		case "education":
			content = <Education />;
			break;
		// Add more cases as needed...
		default:
			content = null;
	}
	return (
		<div
			className={`col-start-2 row-start-2 col-span-2 row-span-4 border-2 border-black p-2 flip-card ${
				isFlipped ? "flipped" : ""
			}`}
		>
			{/* <div className="flip-card"> */}
			<div className="flip-card-inner">
				<div className="bg-gray-400 text-black flip-card-front">
					<img
						src="/profile.jpg"
						alt="profile pic"
						className="object-cover w-full h-full"
					/>
				</div>

				<div className="bg-blue-500 text-white flip-card-back">{content}</div>
			</div>
			{/* </div> */}
		</div>
	);
}

export default GameBoardCenter;
