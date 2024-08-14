import CreateCampaign from "modules/dashboard/CreateCampaign";
import React from "react";
import { Section } from "./Dashboard";
import { Title } from "components/title";
import { CampaignItemLarge } from "components/item";
import LayoutMain from "layouts/LayoutMain";

const Campaign = () => {
	return (
		<LayoutMain>
			<div className="flex flex-col gap-10">
				{/* create campaign  */}
				<CreateCampaign></CreateCampaign>
				{/* Your Campaign (4)  */}
				<Section>
					<Title>
						Your Campaign{" "}
						<span className="text-secondary">(4)</span>
					</Title>
					<div className="flex flex-col gap-10">
						{Array(3)
							.fill(null)
							.map((item, index) => (
								<CampaignItemLarge
									key={index}
								></CampaignItemLarge>
							))}
						<button className="p-3 w-[200px] transition-all mx-auto hover:bg-opacity-30 bg-secondary bg-opacity-10 text-secondary font-semibold rounded-[10px] flex items-center justify-center">
							See more+
						</button>
					</div>
				</Section>
				{/* Your Campaign (4)  */}
				<Section>
					<Title>
						Your Campaign{" "}
						<span className="text-secondary">(4)</span>
					</Title>
					<div className="flex flex-col gap-10">
						{Array(3)
							.fill(null)
							.map((item, index) => (
								<CampaignItemLarge
									key={index}
								></CampaignItemLarge>
							))}
						<button className="p-3 w-[200px] transition-all mx-auto hover:bg-opacity-30 bg-secondary bg-opacity-10 text-secondary font-semibold rounded-[10px] flex items-center justify-center">
							See more+
						</button>
					</div>
				</Section>
			</div>
		</LayoutMain>
	);
};

export default Campaign;
