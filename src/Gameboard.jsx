import GameBoardCenter from "./GameBoardCenter";
import "./GameBoardCenter.css";

function GameBoard() {
	return (
		<div className="grid grid-cols-4 grid-rows-6 gap-2 p-4 border-2 border-black h-full w-full">
			<div className="col-start-1 row-start-1 col-span-1 row-span-1 bg-green-300 border-2 border-black p-2"></div>
			<div className="col-start-2 row-start-1 col-span-1 row-span-1 bg-blue-300 border-2 border-black p-2"></div>
			<div className="col-start-3 row-start-1 col-span-1 row-span-1 bg-green-300 border-2 border-black p-2"></div>
			<div className="col-start-4 row-start-1 col-span-1 row-span-1 bg-blue-300 border-2 border-black p-2"></div>
			<div className="col-start-1 row-start-2 col-span-1 row-span-1 bg-blue-300 border-2 border-black p-2"></div>
			<div className="col-start-1 row-start-3 col-span-1 row-span-1 bg-green-300 border-2 border-black p-2"></div>
			<div className="col-start-1 row-start-4 col-span-1 row-span-1 bg-blue-300 border-2 border-black p-2"></div>
			<div className="col-start-1 row-start-5 col-span-1 row-span-1 bg-green-300 border-2 border-black p-2"></div>
			<div className="col-start-1 row-start-6 col-span-1 row-span-1 bg-blue-300 border-2 border-black p-2"></div>
			<div className="col-start-2 row-start-6 col-span-1 row-span-1 bg-green-300 border-2 border-black p-2"></div>
			<div className="col-start-3 row-start-6 col-span-1 row-span-1 bg-blue-300 border-2 border-black p-2"></div>
			<div className="col-start-4 row-start-6 col-span-1 row-span-1 bg-green-300 border-2 border-black p-2"></div>
			<div className="col-start-4 row-start-5 col-span-1 row-span-1 bg-blue-300 border-2 border-black p-2"></div>
			<div className="col-start-4 row-start-4 col-span-1 row-span-1 bg-green-300 border-2 border-black p-2"></div>
			<div className="col-start-4 row-start-3 col-span-1 row-span-1 bg-blue-300 border-2 border-black p-2"></div>
			<div className="col-start-4 row-start-2 col-span-1 row-span-1 bg-green-300 border-2 border-black p-2"></div>
			{/* <div className="col-start-2 row-start-2 col-span-2 row-span-4 border-2 border-black p-2"> */}
			<GameBoardCenter />
			{/* </div> */}
		</div>
	);
}

export default GameBoard;
