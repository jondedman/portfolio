import { useState } from "react";

function Cv() {
	const [openSection, setOpenSection] = useState(null);

	const toggleSection = (section) => {
		setOpenSection(openSection === section ? null : section);
	};

	return (
		<div className="overflow-auto h-full p-6">
			<h1 className="mb-4 font-bold">CV</h1>
			<div>
				<a
					href="Developer CV.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="text-decoration-underlined"
				>
					Download CV
				</a>
			</div>
			<div className="border-2 border-black">
				<h2 className="text-left my-2">Contact</h2>
				<div className="flex justify-start">
					<ul className="text-left mb-2">
						<li>+44 07932563406</li>
						<li>jonathandedman@hotmail.com</li>
						<li>https://github.com/jondedman </li>
						<li>linkedin.com/in/jon-dedman</li>
						<li>location: London/remote </li>
					</ul>
				</div>
			</div>
			<h2
				className="mb-2 text-left cursor-pointer font-bold"
				onMouseEnter={() => toggleSection("Profile")}
			>
				Profile
			</h2>
			{openSection === "Profile" && (
				<p className="text-left">
					Aspiring software engineer with a strong foundation in problem-solving
					and a demonstrated aptitude for coding in Ruby JavaScript, and Python
					while also building full-stack applications with Ruby on Rails and the
					PERN (PostgreSQL, Express, React, Node.js) stack. Passionate about
					contributing to impactful projects and delivering innovative
					solutions. A collaborative team player eager to embrace emerging
					technologies and continuously expand my skill set. Committed to
					crafting secure, user-centered software and driving positive outcomes
					in a dynamic and evolving tech landscape.
				</p>
			)}
			<br />
			<div>
				<h2
					className="mb-2 text-left cursor-pointer font-bold"
					onMouseEnter={() => toggleSection("Technical Skills")}
				>
					Technical skills
				</h2>
				{openSection === "Technical Skills" && (
					<ul className="text-left">
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
			</div>

			<br />

			<div>
				<h2
					className="mb-2 text-left cursor-pointer font-bold"
					onMouseEnter={() => toggleSection("Other Skills")}
				>
					Other skills
				</h2>
				{openSection === "Other Skills" && (
					<ul className="text-left">
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
			</div>

			<br />

			<div>
				<h2
					className="mb-2 text-left cursor-pointer font-bold"
					onMouseEnter={() => toggleSection("Recent roles")}
				>
					Recent roles
				</h2>
				{openSection === "Recent roles" && (
					<ul className="text-left">
						<li>
							Full-Stack Developer | RDAutos | Dates: 01/06/2023 - 01/12/2023
						</li>
						<ul>
							<li>
								{" "}
								Spearheaded the end-to-end design, development, and
								implementation of a bespoke full-stack PERN booking system for a
								bustling garage.
							</li>
							<li>
								{" "}
								Collaborated closely with stakeholders to identify requirements,
								resulting in a tailor-made solution that streamlined booking
								processes and enhanced customer experiences.
							</li>
							<li>
								{" "}
								Leveraged JavaScript, React.js, Node.js (with Express.js), and
								PostgreSQL to architect a robust and user- friendly interface
								for seamless booking management.
							</li>
							<li>
								{" "}
								Demonstrated exceptional problem-solving abilities, addressing
								technical challenges and optimizing system performance to exceed
								client expectations.
							</li>
						</ul>
						<br />
						<ul>
							<li>
								IT Support Specialist | Amaya | Dates: 01/05/2023 - present
							</li>
							<li>
								Provided comprehensive IT support, troubleshooting, and issue
								resolution for Amaya Automated headless browser using puppeteer
								and node.js to provide data solution to enable database of
								contacts.
							</li>
							<li>
								Managed and maintained the company’s website, ensuring optimal
								performance and functionality.
							</li>
							<li>
								Developed and implemented a robust social media strategy,
								driving brand awareness and engagement across multiple
								platforms.
							</li>
							<li>
								Streamlined all aspects of commercial artists administration and
								social media.
							</li>
						</ul>
					</ul>
				)}
			</div>

			<br />

			<div>
				<h2
					className="mb-2 text-left cursor-pointer font-bold"
					onMouseEnter={() => toggleSection("Work history")}
				>
					Work history
				</h2>
				{openSection === "Work history" && (
					<ul className="text-left">
						<li>Freelance tutor, freelance editor Dates: 2007 - present</li>
						<ul>
							<li>
								Entrepreneurial Management | 16+ Years Effectively orchestrated
								and managed all facets of two thriving freelance enterprises,
								showcasing adept organizational prowess and entrepreneurial
								acumen.
							</li>
							<li>
								Educator and Communicator Demonstrated exceptional communication
								skills as an educator, fostering engaged and interactive
								learning environments that facilitated enhanced knowledge
								retention and student success.
							</li>
							<li>
								Meticulous Freelance Editor Exercised a keen eye for detail and
								precision in delivering freelance editorial services, ensuring
								the highest quality in written content and meeting client
								expectations.
							</li>
						</ul>
						<br />
						<li>Administrator| NCVO | Dates: 2006 -2007</li>
						<ul>
							<li>
								Managing and resolving budget to ensure the continued operations
								of the Infrastructure NationalPartnership. Ensuring seemless
								communication between high-profile MPs, public figures and NCVO
								staff Processing of complex technical information into readable
								minutes for all stakeholders.
							</li>
						</ul>
						<br />
						<li>Administrator | IOE | Dates: 2005 -2008</li>
						<ul>
							<li>
								Website Management | Institute of Education Leveraged
								Dreamweaver to oversee and meticulously manage the website at
								the Institute of Education, ensuring an intuitive user
								experience and up-to-date content delivery while contributing to
								the institute's online presence. Proactively created reports on
								admission statistics to support the work of the registry.
							</li>
						</ul>
					</ul>
				)}
			</div>

			<br />
			<div>
				<h2
					className="mb-2 text-left cursor-pointer font-bold"
					onMouseEnter={() => toggleSection("Older roles")}
				>
					Older roles prior to 2005
				</h2>
				{openSection === "Older roles" && (
					<ul className="text-left">
						<li>Box Office Manager | Lyric Theatre | Dates: 2003 - 2005</li>
						<ul>
							<li>
								Dynamic Problem Solver and Technical Expertise Nimbly tackled
								complex issues while serving as a resourceful box-office manager
								at the Lyric Theatre and New Park Cinema, while also employing
								technical prowess to manage various systems and enhance customer
								experiences.
							</li>
						</ul>
						<br />
						<li>GIS Technician | Data Collection Ltd | Dates: 2001 - 2003</li>
						<ul>
							<li>
								Applied technical expertise and proficiency in Geographic
								Information Systems (GIS) as a valued technician at Data
								Collection Ltd, contributing to data analysis, interpretation,
								and mapping with precision and accuracy.
							</li>
							<li>QA Tester at Electronic Arts</li>
						</ul>
					</ul>
				)}
			</div>
			<br />
			<div>
				<h2
					className="mb-2 text-left cursor-pointer font-bold"
					onMouseEnter={() => toggleSection("Education")}
				>
					Education
				</h2>
				{openSection === "Education" && (
					<ul className="text-left">
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
			</div>
		</div>
	);
}

export default Cv;
