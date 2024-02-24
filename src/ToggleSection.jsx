import { useState, useRef } from "react";
import PropTypes from "prop-types";

const ToggleSection = ({ section, children }) => {
	const [openSection, setOpenSection] = useState(false);
	const buttonRef = useRef(null);
	const toggleSection = () => {
		setOpenSection(openSection === section ? false : section);
		buttonRef.current.blur();
	};

	return (
		<button
			ref={buttonRef}
			style={{
				cursor: "pointer",
				background: openSection === section ? "#F5EDDB" : "none",
				border: "none",
				padding: "0.5rem",
				margin: openSection === section ? "0.5rem" : "0",
				font: "inherit",
				color: openSection === section ? "black" : "inherit",
				borderRadius: openSection === section ? "0.5rem" : "none",
			}}
			onMouseDown={toggleSection}
			onTouchStart={toggleSection}
		>
			{children(openSection)}
		</button>
	);
};

ToggleSection.propTypes = {
	section: PropTypes.string.isRequired,
	children: PropTypes.func.isRequired,
};

export default ToggleSection;
