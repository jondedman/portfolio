// import React from "react";
import PropTypes from "prop-types";

const Key = ({ children, className }) => (
	<button
		className={`text-black w-14 h-14 bg-gray-300 ml-1.5 text-lg shadow-custom outline-none font-medium rounded-lg font-poppins transition ease-in-out duration-200 transform active:shadow-active ${className}`}
	>
		{children}
	</button>
);

Key.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default Key;
