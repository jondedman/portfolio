import React, { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<div className="flex justify-center items-center bg-banner-color h-[8vh] w-full">
				<button
					className="p-1 md:hidden bg-background-color rounded-lg absolute left-4"
					onClick={() => setIsOpen(!isOpen)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="h-4 w-4"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				<h1 className="md:text-2xl xs:text-lg font-bold text-center font-poppins text-background-color">
					Jon Dedman - Portfolio
				</h1>
			</div>

			<div
				className={`fixed top-0 left-0 w-fit h-fit bg-banner-color xs:opacity-60 md:opacity-100 text-background-color z-10 transform transition-transform duration-200 ease-in-out ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				} md:relative md:translate-x-0 md:w-auto md:h-auto xs:flex-col xs:items-start text-background-color md:text-lg md:justify-around mx-auto p-2 xs:text-xs xs:justify-start xs:absolute xs:top-16 md:top-0`}
			>
				<div className="md:flex md:flex-row md:justify-center md:items-start ">
					<h2 className="xs:my-3 xs:mx-2">+447932563406</h2>
					<h2 className="xs:my-3 xs:mx-2">jonathandedman@hotmail.com</h2>
					<h2 className="xs:my-3 xs:mx-2 hover:text-blue-800">
						<a
							href="https://github.com/jondedman"
							target="_blank"
							rel="noreferrer"
							className="underline active:text-blue active:font-bold"
						>
							Github
						</a>
					</h2>
					<h2 className="xs:my-3 xs:mx-2 hover:text-blue-800">
						<a
							href="https://linkedin.com/in/jon-dedman"
							target="_blank"
							rel="noreferrer"
							className="underline"
						>
							LinkedIn
						</a>
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
