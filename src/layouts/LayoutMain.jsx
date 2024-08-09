import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const LayoutMain = () => {
	return (
		<div className="flex flex-col w-full h-screen px-10 pt-10 overflow-hidden bg-lite">
			{/* top bar  */}
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
					<div className="relative rounded-full p-[5px] bg-white shadow-md h-[inherit] w-[460px] flex items-center gap-5 border border-gray-100">
						<input
							type="text"
							placeholder="Do fundrise now"
							className="flex-1 w-full h-full pl-4 rounded-full placeholder:text-text4"
						/>
						<button className="flex items-center justify-center h-full text-white rounded-full bg-primary px-7">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-[18px] h-[18px]"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
						</button>
					</div>
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

			{/* body  */}
			<div className="flex-1 flex gap-[52px]">
				{/* side nav  */}
				<div className="w-[76px] mt-4 px-3.5 py-10 h-[650px] shadow-lg bg-white rounded-full">
					<div className="flex flex-col gap-[30px]">
            {navItems.map((nav) => (
              <NavLink
							key={nav.label}
                to={nav.path}
                className={({ isActive }) =>
                  `w-full rounded-lg aspect-square flex items-center justify-center ${
                    isActive ? "text-primary bg-primary bg-opacity-10" : "text-text3 bg-white"
                  }`
                }
              >
                {nav.icon}
              </NavLink>
            ))}
          </div>
				</div>

				{/* main  */}
				<div className="flex-1 pb-10 h-[calc(100vh-122px)] overflow-y-scroll scroll-hidden">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

const navItems = [
	{
		label: "Dashboard",
		path: "/",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={25}
				height={25}
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M2 2h9v9H2zm2 2v5h5V4zm13.5 0a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M13 6.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M2 13h9v9H2zm2 2v5h5v-5zm9-2h9v9h-9zm2 2v5h5v-5z"
				></path>
			</svg>
		),
	},
	{
		label: "Campaign",
		path: "/campaign",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={25}
				height={25}
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M18 11v2h4v-2zm-2 6.61c.96.71 2.21 1.65 3.2 2.39c.4-.53.8-1.07 1.2-1.6c-.99-.74-2.24-1.68-3.2-2.4c-.4.54-.8 1.08-1.2 1.61M20.4 5.6c-.4-.53-.8-1.07-1.2-1.6c-.99.74-2.24 1.68-3.2 2.4c.4.53.8 1.07 1.2 1.6c.96-.72 2.21-1.65 3.2-2.4M4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9zm5.03 1.71L11 9.53v4.94l-1.97-1.18l-.48-.29H4v-2h4.55zM15.5 12c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34"
				></path>
			</svg>
		),
	},
	{
		label: "Payment",
		path: "/payment",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={25}
				height={25}
				viewBox="0 0 16 16"
			>
				<path
					fill="currentColor"
					d="M10.5 10a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM1 5.5A2.5 2.5 0 0 1 3.5 3h9A2.5 2.5 0 0 1 15 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5zM14 6v-.5A1.5 1.5 0 0 0 12.5 4h-9A1.5 1.5 0 0 0 2 5.5V6zM2 7v3.5A1.5 1.5 0 0 0 3.5 12h9a1.5 1.5 0 0 0 1.5-1.5V7z"
				></path>
			</svg>
		),
	},
	{
		label: "Withdraw",
		path: "/withdraw",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={25}
				height={25}
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M12 15c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92c0-1.12-.52-3-4-3c-2 0-2-.63-2-1s.7-1 2-1s1.39.64 1.4 1h2A3 3 0 0 0 13 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3c2 0 2 .68 2 1s-.62 1-2 1"
				></path>
				<path
					fill="currentColor"
					d="M5 2H2v2h2v17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4h2V2zm13 18H6V4h12z"
				></path>
			</svg>
		),
	},
	{
		label: "Profile",
		path: "/profile",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={25}
				height={25}
				viewBox="0 0 24 24"
			>
				<g fill="none">
					<path
						stroke="currentColor"
						strokeWidth={2}
						d="M21 12a8.96 8.96 0 0 1-1.526 5.016A8.99 8.99 0 0 1 12 21a8.99 8.99 0 0 1-7.474-3.984A9 9 0 1 1 21 12Z"
					></path>
					<path
						fill="currentColor"
						d="M13 9a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm-1 1a1 1 0 0 1-1-1H9a3 3 0 0 0 3 3zm-1-1a1 1 0 0 1 1-1V6a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm-6.834 9.856l-.959-.285l-.155.523l.355.413zm13.668 0l.76.651l.354-.413l-.155-.523zM9 16h6v-2H9zm0-2a5 5 0 0 0-4.793 3.571l1.917.57A3 3 0 0 1 9 16zm3 6a7.98 7.98 0 0 1-6.075-2.795l-1.518 1.302A9.98 9.98 0 0 0 12 22zm3-4c1.357 0 2.506.902 2.876 2.142l1.916-.571A5 5 0 0 0 15 14zm3.075 1.205A7.98 7.98 0 0 1 12 20v2a9.98 9.98 0 0 0 7.593-3.493z"
					></path>
				</g>
			</svg>
		),
	},
	{
		label: "Logout",
		path: "/logout",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={25}
				height={25}
				viewBox="0 0 24 24"
			>
				<g
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth={1.55}
				>
					<path
						strokeLinejoin="round"
						d="M13.477 21.245H8.34a4.92 4.92 0 0 1-5.136-4.623V7.378A4.92 4.92 0 0 1 8.34 2.755h5.136"
					></path>
					<path strokeMiterlimit={10} d="M20.795 12H7.442"></path>
					<path
						strokeLinejoin="round"
						d="m16.083 17.136l4.404-4.404a1.04 1.04 0 0 0 0-1.464l-4.404-4.404"
					></path>
				</g>
			</svg>
		),
	},
];

export default LayoutMain;
