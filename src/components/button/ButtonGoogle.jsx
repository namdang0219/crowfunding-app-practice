import ErrorComponent from "components/common/ErrorComponent";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";

const ButtonGoogle = ({ text = "Sign up with Google", onClick = () => {} }) => {
	return (
		<button
			onClick={onClick}
			className="flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border dark:border-darkStrock text-text2 border-strock rounded-xl gap-x-3"
		>
			<img srcSet="/icon-google.png 2x" alt="icon-google" />
			<span className="dark:text-whiteSoft">{text}</span>
		</button>
	);
};

export default withErrorBoundary(ButtonGoogle, {
	FallbackComponent: ErrorComponent,
});
