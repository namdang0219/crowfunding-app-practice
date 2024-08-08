import React from "react";

const Checkbox = ({ checked = false, name = "", onClick = () => {} }) => {
	return (
		<label
			onClick={onClick}
			name={name}
			className={`inline-flex items-center justify-center p-1 w-5 h-5 border-2 rounded cursor-pointer ${
				checked ? "bg-primary border-primary" : "bg-white dark:bg-transparent dark:border-darkStrock border-strock"
			}`}
		>
			{/* <input
				type="checkbox"
				className="hidden"
				name={name}
			/> */}
			{checked && (
				<span className="text-white">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={20}
						height={20}
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"
						></path>
					</svg>
				</span>
			)}
		</label>
	);
};

export default Checkbox;
