import React from "react";

const CampaignItem = () => {
	return (
		<div className="w-full max-w-[288px] rounded-[15px] bg-white">
			{/* image  */}
			<div className="h-[158px] rounded-[inherit] overflow-hidden">
				<img
					src="https://i.pinimg.com/564x/b5/b9/3c/b5b93c2d70dcda975ed42a89ca0e6734.jpg"
					alt="campaign-img"
					className="object-cover object-center w-full h-full"
				/>
			</div>

			<div className="py-[15px] px-5">
				{/* content  */}
				<div className="flex flex-col gap-[15px] mb-5">
					{/* folder  */}
					<div className="flex items-center gap-2.5">
						<span className="text-text3">
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
									d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
								/>
							</svg>
						</span>
						<span className="text-xs font-medium text-text3">
							Education
						</span>
					</div>

					{/* title and desc  */}
					<div>
						<h4 className="mb-1 text-base font-semibold">
							Powered Kits Learning Boxes
						</h4>
						<p className="text-xs text-text3">
							Fun, durable and reusable boxes with eco-friendly
							options.
						</p>
					</div>

					{/* analytic  */}
					<div className="flex justify-between">
						<div>
							<p className="text-sm font-semibold">$2,000</p>
							<p className="text-xs font-normal text-text4">
								Raised of $1,900
							</p>
						</div>
						<div>
							<p className="text-sm font-semibold">173</p>
							<p className="text-xs font-normal text-text4">
								Total backers
							</p>
						</div>
					</div>
				</div>

				{/* profile  */}
				<div className="flex items-center gap-2.5">
					<div className="w-[30px] h-[30px] rounded-full overflow-hidden">
						<img
							src="https://i.pinimg.com/564x/ff/5d/79/ff5d79770093b0900196b17e7b484e60.jpg"
							alt="campaign-item-profile-img"
              className="object-cover object-center w-full h-full"
						/>
					</div>
          <p className="text-xs font-normal text-text3">
            by <span className="font-semibold">Mahfuzul Nabil</span>
          </p>
				</div>
			</div>
		</div>
	);
};

export default CampaignItem;
