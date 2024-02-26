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
			<h1>Jaipur</h1>

			<h2>
				<a
					href="https://jaipur-987f936505cd.herokuapp.com/games/5"
					target="blank"
					rel="noreferrer"
					className="underline active:text-blue active:font-bold"
				>
					Play it on Heroku
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
