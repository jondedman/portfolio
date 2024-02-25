import ToggleSection from "../ToggleSection";

function Rda() {
	const handleClick = (event) => {
		event.stopPropagation();
		console.log("clicked in rda");
		// Add any additional click handling code here
	};
	return (
		<div
			className="overflow-y-auto h-full w-full p-6"
			onClick={handleClick}
			onMouseDown={handleClick}
		>
			<h1 className="font-bold">
				RD Autos Booking System
				<a
					href="https://github.com/jondedman/booking-system"
					target="_blank"
					rel="noreferrer"
					className="underline active:text-blue active:font-bold"
				>
					<svg
						className="h-6 w-6 inline-block ml-2"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"
						/>
					</svg>
				</a>{" "}
			</h1>

			<ToggleSection section="Brief">
				{(openSection) => (
					<>
						<h2 className="font-bold my-2">Brief</h2>
						{openSection === "Brief" && (
							<p>
								An internal booking system commisioned for RD Autos (a garage in
								Chichester). The Idea was created iteratively with the client to
								their specification. They wanted a database created when they
								booked clients in for MOTs and repairs. And to move away from
								thier paper-based diary to a more flexible and functional
								solution.
							</p>
						)}
					</>
				)}
			</ToggleSection>

			<ToggleSection section="User story 1">
				{(openSection) => (
					<>
						<h2 className="font-bold my-2">User story 1</h2>
						{openSection === "User story 1" && (
							<div className="relative pt-56 flex justify-center items-center">
								<iframe
									className="absolute top-0 w-full h-full pb-3"
									src="https://www.youtube.com/embed/RHNXrbAxz2c"
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						)}
					</>
				)}
			</ToggleSection>

			<br />
			<ToggleSection section="Stack">
				{(openSection) => (
					<>
						<h2 className="font-bold my-2">Stack used</h2>
						{openSection === "Stack" && (
							<>
								<p>
									JavaScript, React.js, Node.js (with Express.js), and
									PostgreSQL, Heroku
								</p>

								<h3 className="font-bold my-2">Libraries</h3>
								{/* make sure this is complete */}
								<p>
									React-Big-Calender, AG-Grid, React-Router, Axios, Bcrypt,
									Cors, Dotenv, Express, Nodemon, Sequelize, Passport,
									Google-recaptcha, Jest, Bootstrap.
								</p>
							</>
						)}
					</>
				)}
			</ToggleSection>

			<ToggleSection section="Back End decisions">
				{(openSection) => (
					<>
						<h2 className="font-bold my-2">Back End decisions</h2>
						{openSection === "Back End decisions" && (
							<p>
								The back end was built using Node.js with Express.js and
								PostgreSQL. The database was designed using Sequelize and the
								server was tested using Jest. I choose to follow the MVC pattern
								as it was a familiar pattern to me and I felt it would be the
								best way to keep the codebase clean and maintainable. Jest was
								used to test the validation and the routes.
							</p>
						)}
					</>
				)}
			</ToggleSection>

			<ToggleSection section="Front End decisions">
				{(openSection) => (
					<>
						<h2 className="font-bold my-2">Front End decisions</h2>
						{openSection === "Front End decisions" && (
							<p>
								The front end was built using React.js. I choose to use
								React-Big-Calendar for the calendar and AG-Grid for the tables.
								I used Bootstrap for the styling and React-Router for the
								routing. I used Axios to make the API requests and I used
								Google-recaptcha to protect the login and register forms from
								bots.
							</p>
						)}
					</>
				)}
			</ToggleSection>

			<ToggleSection section="MiddleWare">
				{(openSection) => (
					<>
						<h2 className="font-bold my-2">MiddleWare</h2>
						{openSection === "MiddleWare" && (
							<p>
								I used Bcrypt to hash the passwords and Passport to authenticate
								the users. I used Cors to allow the front end to communicate
								with the back end and I used Dotenv to store the environment
								variables. Axios was used to make the API requests and connect
								the front end to the back end.{" "}
							</p>
						)}
					</>
				)}
			</ToggleSection>

			<ToggleSection section="Hosting and Deployment">
				{(openSection) => (
					<>
						<h2 className="font-bold my-2">Hosting and Deployment</h2>
						{openSection === "Hosting and Deployment" && (
							<p>
								For convenience, I hosted the front end and back end on Heroku.
								I used the Heroku Postgres add-on for the database. I used the
								Heroku CLI to deploy the back end and the front end was deployed
								using the Heroku GitHub integration.
							</p>
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
								I wanted to keep the enire codebase in one location so I chose
								to organise the repository as a monolith. I had previously
								developed two full-stack web applications in collaboration with
								colleagues at Le wagon, but this was my first solo project: It
								was a also a professional one. I chose to use a PERN stack
								instead of Ruby on rails because I wanted to learn more about
								the stack and I wanted to use a stack that was more popular in
								the industry. Additionaly, due to the popularity of the
								Javascript ecosystem, I felt other developers would be more
								likely and able to contribute to the project in the future.
							</p>
						)}
					</>
				)}
			</ToggleSection>
		</div>
	);
}

export default Rda;
