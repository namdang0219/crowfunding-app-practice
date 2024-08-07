import PropTypes from "prop-types";
import React from "react";
import { useController } from "react-hook-form";

const Input = ({ control, name = "", type = "text", placeholder = "placeholder", ...props }) => {
	const { field } = useController({
		control,
		name,
		defaultValue: "",
	});
	return (
		<div className="relative">
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				className="w-full px-6 py-4 text-sm font-medium border border-strock rounded-xl text-text1 placeholder:text-text4 placeholder:font-medium"
				{...field}
        {...props}
			/>
		</div>
	);
};

Input.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	control: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
