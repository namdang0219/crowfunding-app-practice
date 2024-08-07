import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, type = "button", className = "", ...props }) => {
	return (
		<button
			type={type}
			className={`px-4 py-3 text-base font-semibold rounded-xl flex justify-center items-center text-white ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default Button;
