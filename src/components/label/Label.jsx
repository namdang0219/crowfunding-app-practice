import React from "react";
import PropTypes from "prop-types";

const Label = ({ children, htmlFor = "", className = '' }) => {
	return (
		<label
			htmlFor={htmlFor}
			className={`inline-block dark:text-text3 text-sm font-medium cursor-pointer text-text2 ${className}`}
		>
			{children}
		</label>
	);
};

Label.propTypes = {
	children: PropTypes.node.isRequired,
	htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Label;
