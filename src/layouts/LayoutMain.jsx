import React from "react";
import { Sidebar, Topbar } from "./dashboard";

const LayoutMain = ({ children }) => {
	return (
		<div className="flex flex-col w-full h-screen px-10 pt-10 overflow-hidden bg-lite">
			<Topbar></Topbar>
			<div className="flex-1 flex gap-[52px]">
				<Sidebar></Sidebar>
				<div className="flex-1 pb-10 h-[calc(100vh-122px)] overflow-y-scroll scroll-hidden rounded-lg overflow-hidden">
					{children}
				</div>
			</div>
		</div>
	);
};

export default LayoutMain;
