import ToggleSection from "../ToggleSection";

function Jaipur() {
	const handleClick = (event) => {
		event.stopPropagation();
		console.log("clicked in jaipur");
		// Add any additional click handling code here
	};
	return (
		<div
			className="overflow-y-auto h-full w-full p-6"
			onClick={handleClick}
			onMouseDown={handleClick}
		>
			<div className="mb-4">
				<a
					href="https://github.com/jondedman/Jaipur"
					target="_blank"
					rel="noreferrer"
					className="active:text-blue active:font-bold"
				>
					<span className="font-bold sm:text-md md:text-lg lg:text-xl">
						Jaipur
					</span>
					<svg
						className="h-5 w-5 inline-block ml-4 mb-2 animate-pulse"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"
						/>
					</svg>
				</a>{" "}
			</div>
			<h2 className="text-bold my-4">
				<a
					href="https://jaipur-987f936505cd.herokuapp.com/games/5"
					target="blank"
					rel="noreferrer"
					className="active:text-blue active:font-bold"
				>
					<span>
						Jaipur is a two player card game. Click here to play the game
					</span>
					<svg
						className="h-5 w-5 inline-block ml-4 animate-pulse"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path
							fill="currentColor"
							d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"
						/>
					</svg>
				</a>
			</h2>
			<ToggleSection section="Brief">
				{(openSection) => (
					<>
						<h2 className="font-bold my-2">Brief</h2>
						{openSection === "Brief" && (
							<p>
								This solo project full-stack project was built as refresher for
								the Ruby-on-rails framework. It was built in 14 days. I wanted
								to build something fun and visually appealing to also flex my
								front end skills. I chose to build a clone of the card game
								Jaipur. The game is a two player game and the rules are included
								on the opening screen. The game was built using Ruby on Rails,
								HTML, CSS, Hotwire and Tailwind CSS. The images were generated
								by AI. The game was built using the MVC pattern. Game state is
								managed by a Postgresql database.
							</p>
						)}
					</>
				)}
			</ToggleSection>
			<ToggleSection section="Stack used">
				{(openSection) => (
					<>
						<h2 className="font-bold my-2">Stack used</h2>
						{openSection === "Stack used" && (
							<ul>
								<li>Ruby on Rails</li>
								<li>HTML</li>
								<li>CSS</li>
								<li>Hotwire</li>
								<li>Tailwind CSS</li>
								<li>Postgresql</li>
								<li>Dall-e</li>
								<li>Heroku</li>
							</ul>
						)}
					</>
				)}
			</ToggleSection>
			<ToggleSection section="Challenges">
				{(openSection) => (
					<>
						<h2 className="font-bold my-2">Challenges</h2>
						{openSection === "Challenges" && (
							<p>
								In order to scope out the problem and understand the logic of
								the game, it went through three iterations. The first iteration
								was a CLI game. The second iteration was a web game built using
								HTML, CSS and JavaScript using simple emojis. Then I built the
								final version using Ruby on Rails, HTML, CSS, Hotwire and
								Tailwind CSS. The art was provided by Dall-e. The biggest
								challenge was to build the game state which i decided to handle
								with a postgreSQL database. I had to use Hotwire and stimulus to
								manage the game state and to update the game board. Following on
								from the game logic, the next challenge was to make the game
								fully responsive. The next steps are to use websockets and
								action cable to enable two players to play the game in real time
								on separate devices. Then i plan to improve the card exchage
								logic to use a drag and drop feature.
							</p>
						)}
					</>
				)}
			</ToggleSection>
		</div>
	);
}

export default Jaipur;
