import ContactMe from "../ContactMe";
import ToggleSection from "../ToggleSection";

function Cv() {
	const handleClick = (event) => {
		console.log("clicked in cv");
		event.stopPropagation();
		console.log("clicked in cv after stopPropagation");
	};

	return (
		<div className="overflow-auto h-full p-4 lg:mt-6" onClick={handleClick}>
			<a href="Developer CV.pdf" target="_blank" rel="noopener noreferrer">
				<span className="font-bold sm:text-md md:text-lg lg:text-xl">CV</span>
				<svg
					className="h-6 w-6 inline-block ml-2 animate-bounce"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<path
						fill="currentColor"
						d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3H304V160c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32v96H150.3C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z"
					/>
				</svg>
			</a>{" "}
			<h2 className="text-center my-2 font-bold">Contact</h2>
			<div className="border border-1 rounded-lg mb-4 h-2/3 lg:h-1/3 lg:w-3/4 lg:mx-auto">
				<ContactMe />
			</div>
			<ToggleSection section="Profile">
				{(openSection) => (
					<>
						<h2 className="mb-2 text-center cursor-pointer font-bold">
							Profile
						</h2>
						{openSection === "Profile" && (
							<p className="text-center">
								Aspiring software engineer skilled in Ruby, JavaScript, and
								Python, experienced in building full-stack applications with
								Ruby on Rails and the PERN stack. A collaborative team player,
								passionate about user- centered projects and delivering
								innovative solutions.
							</p>
						)}
					</>
				)}
			</ToggleSection>
			<br />
			<ToggleSection section="Technical Skills">
				{(openSection) => (
					<>
						<h2 className="mb-2 text-center cursor-pointer font-bold">
							Technical skills
						</h2>
						{openSection === "Technical Skills" && (
							<ul className="text-center">
								<li>Languages: JavaScript, HTML5, CSS3, Ruby, Python, Java</li>
								<li>Frameworks: Ruby on Rails, React, Flask, Django</li>
								<li>Database: PostgreSQL, SQLite, MongoDB</li>
								<li>Testing: RSpec, Jest</li>
								<li>Version Control: Git, GitHub</li>
								<li>Deployment: Heroku, Netlify</li>
								<li>Tools: VS Code, Postman, Trello, Figma</li>
								<li>Front-end: Tailwind CSS, Bootstrap</li>
								<li>Methodologies: Agile</li>
							</ul>
						)}
					</>
				)}
			</ToggleSection>
			<br />
			<ToggleSection section="Other Skills">
				{(openSection) => (
					<>
						<h2 className="mb-2 text-center cursor-pointer font-bold">
							Other skills
						</h2>
						{openSection === "Other Skills" && (
							<ul className="text-center">
								<li>Project Management</li>
								<li>Team Leadership</li>
								<li>Problem Solving</li>
								<li>Customer Service</li>
								<li>Time Management</li>
								<li>Communication</li>
								<li>Adaptability</li>
								<li>Collaboration</li>
							</ul>
						)}
					</>
				)}
			</ToggleSection>
			<br />
			<ToggleSection section="Recent roles">
				{(openSection) => (
					<>
						<h2 className="mb-2 text-center cursor-pointer font-bold">
							Recent roles
						</h2>
						{openSection === "Recent roles" && (
							<ul className="text-center">
								<li>
									Full-Stack Developer | RDAutos | Dates: 01/06/2023 -
									01/12/2023
								</li>
								<ul>
									<li>
										{" "}
										In collaboration with stakeholders, leveraged JavaScript,
										React.js, Node.js (with Express.js), and PostgreSQL to
										architect a robust and user-friendly interface for seamless
										booking management.
									</li>
									<li>
										{" "}
										Client attributed a 10% revenue increase in the first two
										months to reduced booking errors and improved usability.
									</li>
									<li>
										{" "}
										Exceeded client expectations by implementing a reporting
										system using AG-grid and ensuring scalability for future
										client-facing applications.
									</li>
								</ul>
								<br />
								<ul>
									<li>IT Support Specialist | Dates: 01/05/2023 - present</li>
									<li>
										Cleaned and refactored machine learning (Python) code to
										work in the production environment within the mental health
										domain for Dr. Ive at Queen Mary University.
									</li>
									<li>
										Utilised Puppeteer and Node.js to reduce time for mail-out
										for artist Amaya from two months to two days.
									</li>
									<li>
										Developed and implemented a robust social media strategy,
										driving brand awareness and engagement across multiple
										platforms.
									</li>
									<li>
										Increased artists Instagram following by 4000 followers by
										using a Python and Selenium script.
									</li>
								</ul>
							</ul>
						)}
					</>
				)}
			</ToggleSection>
			<br />
			<ToggleSection section="Work history">
				{(openSection) => (
					<>
						<h2 className="mb-2 text-center cursor-pointer font-bold">
							Work history
						</h2>
						{openSection === "Work history" && (
							<ul className="text-center">
								<li>Tutor, Editor | Freelance | Dates: 2007 - present</li>
								<ul>
									<li>
										Managed all facets of two thriving freelance enterprises,
										showcasing adept project management, organisational and
										communication skills, including, as an editor, a meticulous
										eye for detail.
									</li>
								</ul>
								<br />
								<li>Administrator| NCVO | Dates: 2006 -2007</li>
								<ul>
									<li>
										Managing and resolving budget. Relating of complex
										information to stakeholders at all levels.
									</li>
								</ul>
								<br />
								<li>Administrator | IOE | Dates: 2005 -2008</li>
								<ul>
									<li>
										Website Management at Institute of Education - leveraging
										Dreamweaver.
									</li>
								</ul>
							</ul>
						)}
					</>
				)}
			</ToggleSection>
			<br />
			<ToggleSection section="Older roles">
				{(openSection) => (
					<>
						<h2 className="mb-2 text-center cursor-pointer font-bold">
							Older roles prior to 2005
						</h2>
						{openSection === "Older roles" && (
							<ul className="text-center">
								<li>Box Office Manager | Lyric Theatre | Dates: 2003 - 2005</li>
								<ul>
									<li>
										Dynamic Problem Solver and Technical Expertise Nimbly
										tackled complex issues while serving as a resourceful
										box-office manager at the Lyric Theatre and New Park Cinema,
										while also employing technical prowess to manage various
										systems and enhance customer experiences.
									</li>
								</ul>
								<br />
								<li>
									GIS Technician | Data Collection Ltd | Dates: 2001 - 2003
								</li>
								<ul>
									<li>
										Applied technical expertise and proficiency in Geographic
										Information Systems (GIS) as a valued technician at Data
										Collection Ltd, contributing to data analysis,
										interpretation, and mapping with precision and accuracy.
									</li>
									<li>QA Tester at Electronic Arts</li>
								</ul>
							</ul>
						)}
					</>
				)}
			</ToggleSection>
			<br />
			<ToggleSection section="Education">
				{(openSection) => (
					<>
						<h2 className="mb-2 text-center cursor-pointer font-bold">
							Education
						</h2>
						{openSection === "Education" && (
							<ul className="text-center">
								<li>Web Development | Le Wagon | Dates: 2022 - 2023</li>
								<ul>
									<li>
										Full Stack Web Development, Software Engineering Immersive
									</li>
									<li>Product design UX and UI</li>
									<li>Agile methodologies</li>
								</ul>
								<br />
								<li>ICMP | Dates: 2007 - 2008</li>
								<ul>
									<li>Diploma in music performance</li>
								</ul>
								<br />
								<li>Chichester College | Dates: 2000 - 2001</li>
								<ul>
									<li>HNC in computing</li>
									<li>CELTA</li>
								</ul>
								<li>Keele University | Dates: 1996 -1999</li>
								<ul>
									<li>BA (Hons) in English and Ancient History</li>
									<li>Additional module in Computer science</li>
									<li>Additional module in philosophy</li>
								</ul>
							</ul>
						)}
					</>
				)}
			</ToggleSection>
		</div>
	);
}

export default Cv;
