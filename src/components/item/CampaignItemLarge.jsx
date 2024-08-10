import React from "react";

const CampaignItemLarge = () => {
	return (
		<div className="flex items-center gap-[30px] group">
			{/* left banner  */}
			<div className="w-[580px] h-[260px] rounded-[25px] overflow-hidden relative">
				<img
					src="https://i.pinimg.com/736x/5c/35/2f/5c352f7e62a38a85824ab7c8e40e68cb.jpg"
					alt="campaign-img"
					className="object-cover object-center w-full h-full"
				/>
				<button className="absolute flex items-center justify-center invisible w-20 h-20 text-white transition-all -translate-x-1/2 -translate-y-1/2 bg-black rounded-full opacity-0 group-hover:visible group-hover:opacity-100 left-1/2 top-1/2 backdrop-blur-sm bg-opacity-20">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-7 h-7"
					>
						<path
							fillRule="evenodd"
							d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>

			{/* right content  */}
			<div className="mt-2.5 flex flex-col gap-3 max-w-[500px] w-full">
				{/* folder  */}
				<div className="flex items-center gap-2.5">
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
								d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
							/>
						</svg>
					</span>
					<span className="text-sm font-medium text-text3">
						Architecture
					</span>
				</div>

				{/* title and desc  */}
				<section>
					<h3 className="mb-4 text-xl font-bold">
						Remake - We Make architecture exhibition
					</h3>
					<p className="text-sm font-normal text-text3">
						Remake - We Make: an exhibition about architecture's
						social agency in the face of urbanisation
					</p>
				</section>

				{/* progress bar  */}
				<div className="py-2.5 w-full">
					<div className="h-[5px] rounded-full w-full bg-[#EFEFEF]">
						<div className="h-[inherit] bg-primary rounded-full w-2/3"></div>
					</div>
				</div>

				{/* analytic  */}
				<div className="flex justify-between flex-1">
					<div>
						<p className="text-xl font-bold">$2,000</p>
						<p className="text-base font-normal text-text4">
							Raised of $2,500
						</p>
					</div>

					<div>
						<p className="text-xl font-bold">173</p>
						<p className="text-base font-normal text-text4">
							Total backers
						</p>
					</div>

					<div>
						<p className="text-xl font-bold">30</p>
						<p className="text-base font-normal text-text4">
							Days left
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CampaignItemLarge;
