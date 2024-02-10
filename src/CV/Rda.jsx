function Rda() {
	return (
		<div className="overflow-y-auto h-full w-full p-6">
			<h1>RD Autos Booking System</h1>

			<h2>Brief</h2>

			<p>
				An internal booking system commisioned for RD Autos (a garage in
				Chichester). The Idea was created iteratively with the client to their
				specification. They wanted a database created when they booked clients
				in for MOTs and repairs. And to move away from thier paper-based diary
				to a more flexible and functional solution.
			</p>

			<h2>Stack used</h2>
			<p>JavaScript, React.js, Node.js (with Express.js), and PostgreSQL</p>
			<h3>Libraries</h3>
			{/* make sure this is complete */}
			<p>
				React-Big-Calender, AG-Grid, React-Router, Axios, Bcrypt, Cors, Dotenv,
				Express, Nodemon, Sequelize, Passport, Google-recaptcha, Jest,
				Bootstrap.
			</p>

			<h2>Back End decisions</h2>
			<p>
				The back end was built using Node.js with Express.js and PostgreSQL. The
				database was designed using Sequelize and the server was tested using
				Jest. I choose to follow the MVC pattern as it was a familiar pattern to
				me and I felt it would be the best way to keep the codebase clean and
				maintainable. Jest was used to test the validation and the routes.
			</p>

			<h2>Front End decisions</h2>
			<p>
				The front end was built using React.js. I choose to use
				React-Big-Calendar for the calendar and AG-Grid for the tables. I used
				Bootstrap for the styling and React-Router for the routing. I used Axios
				to make the API requests and I used Google-recaptcha to protect the
				login and register forms from bots.
			</p>

			<h2>MiddleWare</h2>
			<p>
				I used Bcrypt to hash the passwords and Passport to authenticate the
				users. I used Cors to allow the front end to communicate with the back
				end and I used Dotenv to store the environment variables. Axios was used
				to make the API requests and connect the front end to the back end.{" "}
			</p>

			<h2>Hosting and Deployment</h2>
			<p>
				For convenience, I hosted the front end and back end on Heroku. I used
				the Heroku Postgres add-on for the database. I used the Heroku CLI to
				deploy the back end and the front end was deployed using the Heroku
				GitHub integration.
			</p>

			<h2>Challenges</h2>
			<p>
				I wanted to keep the enire codebase in one location so I chose to
				organise the repository as a monolith. I had previously developed two
				full-stack web applications in collaboration with colleagues at Le
				wagon, but this was my first solo project: It was a also a professional
				one. I chose to use a PERN stack instead of Ruby on rails because I
				wanted to learn more about the stack and I wanted to use a stack that
				was more popular in the industry. Additionaly, due to the popularity of
				the Javascript ecosystem, I felt other developers would be more likely
				and able to contribute to the project in the future.
			</p>

			<p>Image of RDA</p>
			<p>Link to RDA</p>
			<p>Link to Github</p>
		</div>
	);
}

export default Rda;
