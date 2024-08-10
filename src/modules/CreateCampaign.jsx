import React from "react";
import { Link } from "react-router-dom";

const CreateCampaign = () => {
	return (
		<div className="px-10 py-8 bg-white rounded-[20px] flex items-center justify-between">
			{/* left container  */}
			<div className="flex gap-6">
				{/* add button  */}
				<button className="p-4 text-white transition-all rounded-full bg-opacity-60 bg-secondary hover:bg-opacity-80 h-fit">
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
							d="M12 4.5v15m7.5-7.5h-15"
						/>
					</svg>
				</button>

				{/* add content  */}
				<section className="flex flex-col gap-2">
					<h3 className="font-medium text-[22px]">
						Create Your Campaign
					</h3>
					<p className="text-sm text-text3">
						Jump right into our editor and create your first Virtue
						campaign!
					</p>
					<Link to="/campaign" className="text-sm text-primary">
						Need any help? Learn More...
					</Link>
				</section>
			</div>

			{/* right container  */}
			<div>
				<button className="p-3 w-[200px] transition-all hover:bg-opacity-30 bg-secondary bg-opacity-10 text-secondary font-semibold rounded-[10px] flex items-center justify-center">
					Create Campaign
				</button>
			</div>
		</div>
	);
};

export default CreateCampaign;
