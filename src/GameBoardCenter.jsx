// import React, { useState } from "react";
import "./GameboardCenter.css";
import Experience from "./CV/Experience";
import Education from "./CV/Education";
import Stack from "./CV/Stack";
import Jaipur from "./CV/Jaipur";
import WhatCanIEat from "./CV/WhatCanIEat";

function GameBoardCenter({ isFlipped, backContent }) {
	let content;

	switch (backContent) {
		case "experience":
			content = <Experience />;
			break;
		case "education":
			content = <Education />;
			break;
		case "stack":
			content = <Stack />;
			break;
		case "jaipur":
			content = <Jaipur />;
			break;
		case "what can i eat":
			content = <WhatCanIEat />;
			break;
		default:
			content = null;
	}
	return (
		<div
			className={`md:col-start-2 md:row-start-1 md:col-span-2 md:row-span-3 md:h-5/6 md:w-5/6 md:mx-auto md:my-auto xs:h-full xs:w-full xs:row-start-2 xs:row-span-2 xs:col-span-4 flip-card ${
				isFlipped ? "flipped" : ""
			}`}
		>
			{/* <div className="flip-card"> */}
			<div className="flip-card-inner">
				<div className="bg-gray-400 text-black flip-card-front rounded-2xl">
					<img
						src="/profile.jpg"
						alt="profile pic"
						className="object-cover w-full h-full rounded-2xl shadow-custom "
					/>
				</div>

				<div className="bg-blue-500 text-white flip-card-back rounded-2xl shadow-custom">
					{content}
				</div>
			</div>
			{/* </div> */}
		</div>
	);
}

export default GameBoardCenter;
