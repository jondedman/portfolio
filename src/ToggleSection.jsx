import { useState } from "react";
import PropTypes from "prop-types";

const ToggleSection = ({ section, children }) => {
	const [openSection, setOpenSection] = useState(null);

	const toggleSection = () => {
		setOpenSection(openSection === section ? null : section);
	};

	return <div onClick={toggleSection}>{children(openSection)}</div>;
};

ToggleSection.propTypes = {
	section: PropTypes.string.isRequired,
	children: PropTypes.func.isRequired,
};

export default ToggleSection;
