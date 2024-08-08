import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const LayoutAuthentication = ({ children, heading = "" }) => {
	return (
		<div className="relative w-full min-h-screen p-10 dark:bg-darkBg bg-lite isolate">
			<img
				src="/ellipse.png"
				alt="bg"
				className="hidden lg:block pointer-events-none absolute bottom-0 right-0 z-[-1] w-full"
			/>
			<Link to="/" className="inline-block mb-5 lg:mb-16">
				<img srcSet="/logo.png 2x" alt="crowfunding-app-logo" />
			</Link>
			<div className="w-full dark:bg-darkSecondary shadow-sm max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
				<h1 className="mb-1 text-lg font-semibold text-center dark:text-whiteSoft lg:text-xl lg:mb-3 text-text1">
					{heading}
				</h1>
				{children}
			</div>
		</div>
	);
};

LayoutAuthentication.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
	FallbackComponent: ErrorComponent,
});
