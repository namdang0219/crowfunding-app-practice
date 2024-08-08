import { IconEyeToggle } from "components/icons";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useController } from "react-hook-form";

const Input = ({
	control,
	error = "",
	name = "",
	type = "text",
	placeholder = "placeholder",
	...props
}) => {
	const { field } = useController({
		control,
		name,
		defaultValue: "",
	});

	const [hide, setHide] = useState(true);

	return (
		<div className="relative">
			<input
				type={type === "password" ? (hide ? "password" : 'text') : type}
				name={name}
				placeholder={!error && placeholder}
				className={`w-full pl-6 pr-16 py-4 text-sm font-medium border rounded-xl text-text1 placeholder:text-text4 placeholder:font-medium ${
					error.length > 0 ? "border-error" : "border-strock"
				}`}
				{...field}
				{...props}
			/>
			{error.length > 0 && (
				<span className="absolute text-sm font-medium -translate-y-1/2 pointer-events-none text-error top-1/2 left-6 error-input">
					{error}
				</span>
			)}
			{type === "password" && (
				<div
					className="absolute -translate-y-1/2 cursor-pointer right-6 top-1/2"
					onClick={() => setHide(!hide)}
				>
					<IconEyeToggle hide={hide}></IconEyeToggle>
				</div>
			)}
		</div>
	);
};

Input.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	control: PropTypes.any.isRequired,
	placeholder: PropTypes.string,
	error: PropTypes.string,
};

export default Input;
