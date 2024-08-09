import React from "react";

const PageNotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center flex-1 w-full h-screen">
			<div className="w-[400px]">
				<img
					src="/404PageNotFound.png"
					alt="404PageNotFound"
					className="object-cover object-center w-full h-full"
				/>
			</div>
			<p className="mt-10 text-3xl">404 Page Not Found!</p>
		</div>
	);
};

export default PageNotFound;
