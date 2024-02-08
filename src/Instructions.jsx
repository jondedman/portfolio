import React, { useState, useEffect } from "react";

function Instructions() {
	const words = ["Click my picture or one of the projects to find out more"];
	const [currentText, setCurrentText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [wordIndex, setWordIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);

	useEffect(() => {
		const type = () => {
			setCurrentText(words[wordIndex].substring(0, charIndex + 1));
			if (isDeleting) {
				setCharIndex(charIndex - 1);
				if (charIndex === 0) {
					setIsDeleting(false);
					setWordIndex((wordIndex + 1) % words.length);
				}
			} else {
				setCharIndex(charIndex + 1);
				if (charIndex === words[wordIndex].length) {
					setIsDeleting(true);
				}
			}
		};

		const timeoutId = setTimeout(type, 100);
		return () => clearTimeout(timeoutId); // Clear the timeout when the component is unmounted
	}, [charIndex, isDeleting, wordIndex, words]);

	return (
		<div className="flex justify-center items-end min-h-[5vh] xs:mt-0 md:mt-4 mb-1">
			<h1 className="h-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center">
				{currentText}
			</h1>
		</div>
	);
}

export default Instructions;
