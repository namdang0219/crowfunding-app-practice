import Search from "modules/dashboard/Search";
import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
	return (
		<div className="flex mb-[30px] items-center justify-between w-full h-[52px]">
			{/* top bar left  */}
			<div className="flex items-center justify-center gap-[52px] h-[inherit]">
				{/* logo  */}
				<Link
					to="/"
					className=" aspect-square block mx-3 h-[inherit] overflow-hidden shrink-0"
				>
					<img
						src="/logo.png"
						alt="logo"
						className="object-cover object-center w-full h-full"
					/>
				</Link>

				{/* search bar   */}
				<Search></Search>
			</div>
			{/* top bar right  */}
			<div className="flex items-center gap-10 h-[inherit]">
				{/* left  */}
				<div className="flex items-center gap-2">
					<span className="text-text3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
							/>
						</svg>
					</span>
					<span className="text-base font-semibold text-text2">
						Fundrising for
					</span>
					<span className="text-text3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</span>
				</div>

				{/* center  */}
				<button className="bg-secondary w-[190px] text-white rounded-lg h-[inherit] p-3 flex items-center justify-center">
					Start a campaign
				</button>

				{/* right  */}
				<div className="h-[inherit] aspect-square rounded-full overflow-hidden">
					<img
						src="https://i.pinimg.com/564x/e3/57/48/e35748ba9d4b2403e1b9a3ee86c33f4d.jpg"
						alt="avatar"
						className="object-cover object-center w-full h-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
