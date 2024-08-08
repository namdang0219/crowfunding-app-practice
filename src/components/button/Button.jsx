import React from "react";
import PropTypes from "prop-types";

const Button = ({
	children,
	type = "button",
	isLoading = false,
	className = "",
	...props
}) => {
	const child = !!isLoading ? (
		<div className="w-6 h-6 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
	) : (
		children
	);

	return (
		<button
			type={type}
			className={`px-4 py-3 text-base font-semibold rounded-xl flex justify-center items-center min-h-[56px] text-white ${
				isLoading && "opacity-50 pointer-events-none"
			} ${className}`}
			{...props}
		>
			{child}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
	isLoading: PropTypes.bool,
};

export default Button;
