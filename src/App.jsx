import "./App.css";
// import Key from "./Key.jsx";
// import Keyboard from "./Keyboard";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<div className="flex items-center justify-center w-screen h-screen">
				<div className="flex items-center justify-center h-2/3 w-5/6 lg:h-3/4 lg:w-1/2">
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
						<div
							className="col-start-2 row-start-2 col-span-2 row-span-4 border-2 border-black p-2"
							style={{ perspective: "1000px" }}
						>
							<div
								className="relative w-full h-full text-center"
								style={{
									transition: "transform 0.8s",
									transformStyle: "preserve-3d",
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.transform = "rotateY(180deg)")
								}
								onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
							>
								<div
									className="bg-gray-400 text-black absolute w-full h-full"
									style={{ backfaceVisibility: "hidden" }}
								>
									<img
										src="/profile.jpg"
										alt="profile pic"
										className="object-cover w-full h-full"
									/>
								</div>

								<div
									className="bg-blue-500 text-white absolute w-full h-full"
									style={{
										transform: "rotateY(180deg)",
										backfaceVisibility: "hidden",
									}}
								>
									<h1>Jon Placeholder</h1>
									<p>blah</p>
									<p>more blah</p>
								</div>
							</div>
						</div>
						{/* Other grid items */}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
