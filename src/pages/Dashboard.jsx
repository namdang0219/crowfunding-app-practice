import { CampaignItem, CampaignItemLarge } from "components/item";
import { Title } from "components/title";
import LayoutMain from "layouts/LayoutMain";
import React from "react";

const Dashboard = () => {
	return (
		<LayoutMain>
			<div className="flex flex-col gap-[30px]">
				{/* your campaign  */}
				<Section>
					<Title>
						Your Campaign <span className="text-secondary">(4)</span>
					</Title>
					{/* campaign details  */}
					<CampaignItemLarge></CampaignItemLarge>
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
				{/* Recent Campaign  */}
				<Section>
					<Title>Recent Campaign</Title>
					<div className="flex gap-[30px]">
						{Array(4)
							.fill(null)
							.map((item, index) => (
								<CampaignItem key={index}></CampaignItem>
							))}
					</div>
				</Section>
			</div>
		</LayoutMain>
	);
};

export const Section = ({ children }) => {
	return <section className="flex flex-col gap-2.5">{children}</section>;
};

export default Dashboard;
