import "./GameboardCenter.css";

function GameBoardCenter() {
	return (
		<div className="col-start-2 row-start-2 col-span-2 row-span-4 border-2 border-black p-2 flip-card">
			{/* <div className="flip-card"> */}
			<div className="flip-card-inner">
				<div className="bg-gray-400 text-black flip-card-front">
					<img
						src="/profile.jpg"
						alt="profile pic"
						className="object-cover w-full h-full"
					/>
				</div>

				<div className="bg-blue-500 text-white flip-card-back">
					<h1>Jon Placeholder</h1>
					<p>blah</p>
					<p>more blah</p>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
}

export default GameBoardCenter;
