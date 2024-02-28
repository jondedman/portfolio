import "./GameBoardCenter.css";
import Experience from "./CV/Experience";
import Education from "./CV/Education";
import Stack from "./CV/Stack";
import Rda from "./CV/Rda";
import Jaipur from "./CV/Jaipur";
import WhatCanIEat from "./CV/WhatCanIEat";
import PayAndPlay from "./CV/PayAndPlay";
import Cv from "./CV/CV";

import PropTypes from "prop-types";

function GameBoardCenter({ isFlipped, backContent }) {
	let content;

	// const handleChildClick = (event) => {
	// 	event.stopPropagation();
	// rest of your code for this specific child element
	// };

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
		case "rda":
			content = <Rda />;
			break;
		case "pnp":
			content = <PayAndPlay />;
			break;
		case "cv":
			content = <Cv />;
			break;
		default:
			content = null;
	}
	return (
		<div
			// onClick={handleChildClick}
			className={`sm:col-start-2 sm:row-start-1 sm:col-span-2 sm:row-span-3 sm:h-full sm:w-5/6 sm:mx-auto sm:my-auto h-full w-full row-start-2 row-span-2 col-span-4 flip-card ${
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

GameBoardCenter.propTypes = {
	isFlipped: PropTypes.bool.isRequired,
	backContent: PropTypes.string.isRequired,
};
