import ToggleSection from "../ToggleSection";

function WhatCanIEat() {
	const handleClick = (event) => {
		event.stopPropagation();
		console.log("clicked in WhatCanIEat");
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
					href="https://github.com/jondedman/what-can-i-eat"
					target="_blank"
					rel="noreferrer"
					className="active:text-blue font-bold sm:text-md md:text-lg lg:text-xl"
				>
					What Can I Eat!?
					<svg
						className="h-6 w-6 inline-block ml-4 mb-2 animate-pulse"
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

			{/* <a
				className="text-white underline"
				href="http://www.whatcanieat.world"
				target="_blank"
				rel="noopener noreferrer"
			>
				What Can I Eat!? - see it live on Heroku
			</a> */}
			<ToggleSection section="Brief">
				{(openSection) => (
					<>
						<h2 className="font-bold my-2">Brief</h2>
						{openSection === "Brief" && (
							<>
								<p>
									What can I eat!? was the final collaborative project with my
									wonderful friends{" "}
									<a
										href="https://github.com/fransan6"
										target="_blank"
										rel="noreferrer"
										className="underline active:text-blue active:font-bold"
									>
										Francesca Sandford
									</a>
									,{" "}
									<a
										href="https://github.com/alexagodzilla"
										target="_blank"
										rel="noreferrer"
										className="underline active:text-blue active:font-bold"
									>
										Alessandro Agozzino
									</a>{" "}
									and{" "}
									<a
										href="https://github.com/ilariaperoni"
										target="_blank"
										rel="noreferrer"
										className="underline active:text-blue active:font-bold"
									>
										Ilaria Peroni
									</a>
									. I have forked a copy of the original project from my github
									repo. The original project was built over several months in
									Ruby on Rails and then deployed to Heroku.
								</p>

								<p>
									What can I eat!? is a web application designed to help users
									make use of leftover ingredients in their fridge. The app
									allows users to search for recipes based on the ingredients
									they have, and also lets them save recipes to their profile.
									The goal was to create a visually appealing application that
									provides a great user experience. Additionally, the app needed
									to be deployed on Heroku. I proposed and implemented a social
									aspect for the app, enabling users to see the contents of each
									other’s pantries and fridges, and meet in chatrooms to discuss
									what they could cook together.
								</p>
							</>
						)}
					</>
				)}
			</ToggleSection>
			<ToggleSection section="Responsibilities">
				{(openSection) => (
					<>
						<h2 className="font-bold my-2">Responsibilities</h2>
						{openSection === "Responsibilities" && (
							<p>
								Integrated the Spoonacular API to seed the app with data and
								create a Minimum Viable Product (MVP). Contributed to the
								front-end design of the recipe show pages. Researched and
								implemented full-text search functionality using the pg_search
								gem.
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
								<li>JavaScript</li>
								<li>PostgreSQL</li>
								<li>Heroku</li>
								<li>Spoonacular API</li>
								<li>pg_search gem</li>
								<li>Bootstrap</li>
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
								Finding an appropriate API was a challenge. The Spoonacular API
								was chosen because it was free and had a good range of recipes.
								The API was also easy to use and had good documentation. The API
								was used to seed the app with data. The data was stored in JSON
								files and then imported into the database. The biggest challenge
								was the full-text search functionality. I had to research and
								implement the pg_search gem. This was a challenge because it was
								the first time I had used this gem. After researching the
								different options, I decided that pg_search was going to be the
								quickest and most lightweight option to implement. The app could
								be further improved by sourcing better recipes and improving the
								front-end to make it fully responsive.
							</p>
						)}
					</>
				)}
			</ToggleSection>
		</div>
	);
}

export default WhatCanIEat;
