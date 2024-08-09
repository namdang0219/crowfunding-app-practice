import { CampaignItem } from "components/item";
import { Title } from "components/title";
import React from "react";

const Dashboard = () => {
	return (
		<div className="flex flex-col gap-[30px]">
			{/* your campaign  */}
			<Section>
				<Title>
					Your Campaign <span className="text-secondary">(4)</span>
				</Title>

				{/* campaign details  */}
				<div className="flex gap-[30px]">
					{/* banner  */}
					<div className="w-[580px] shrink-0 h-[260px] rounded-[25px] overflow-hidden">
						<img
							src="https://i.pinimg.com/564x/31/f4/de/31f4dec96887abb6bd6b16fb343a104e.jpg"
							alt="your-campaign"
							className="object-cover object-center w-full h-full"
						/>
					</div>

					{/* content  */}
					<div className="mt-2.5 flex flex-col gap-3 max-w-[435px] w-full">
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
								Remake - We Make: an exhibition about
								architecture's social agency in the face of
								urbanisation
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
			</Section>

			{/* Popular Campaign */}
			<Section>
				<Title>Popular Campaign</Title>

				<div className="flex gap-[30px]">
					{Array(4)
						.fill(null)
						.map((item, index) => (
							<CampaignItem key={index}></CampaignItem>
						))}
				</div>
			</Section>
		</div>
	);
};

const Section = ({ children }) => {
	return <section className="flex flex-col gap-2.5">{children}</section>;
};

export default Dashboard;
