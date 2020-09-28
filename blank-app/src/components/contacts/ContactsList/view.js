import React from "react";
import { List, Tag, Card, Typography, Spin } from "antd";
import Redirect from "../../UI/Redirect";
import { addressFormat } from "utils";
import "./style.scss";

const View = ({ contactsData, tempUserData, loading, filterLoading }) => {
	const { Meta } = Card;
	const { Text, Paragraph } = Typography;

	const card = (user, index) => {
		return (
			<Card
				hoverable
				className={"card-contact"}
				cover={
					<Redirect
						link={`contacts/${index}`}
						data={{ userData: user }}
					>
						<img alt={user.fullName} src={user.largePhoto} />
					</Redirect>
				}
			>
				<Meta
					title={
						<div>
							<Redirect
								link={`contacts/${index}`}
								data={{ userData: user }}
							>
								{user.fullName}
							</Redirect>
							<Text type="secondary">
								{" "}
								<small>({user.age} years)</small>
							</Text>
						</div>
					}
					description={
						<div className={"card__contentBlock"}>
							<div className={"card__contentBlock-details"}>
								<span
									className={
										"card__contentBlock-details--email"
									}
								>
									<Paragraph
										copyable={{ text: user.email }}
									></Paragraph>
									<a href={`mailto: ${user.email}`}>
										{user.email}
									</a>
								</span>
								<span
									className={
										"card__contentBlock-details--phone"
									}
								>
									<Paragraph
										copyable={{ text: user.phone }}
									></Paragraph>
									<a href={`tel: ${user.phone}`}>
										{user.phone}
									</a>
								</span>
								<span
									className={
										"card__contentBlock-details--address"
									}
								>
									<Paragraph
										copyable={{ text: user.location }}
									></Paragraph>
									{addressFormat(user.location)}
								</span>
							</div>
							<span className={"card__contentBlock-tag"}>
								<Tag color={user.nationality.color}>
									{user.nationality.name}
								</Tag>
							</span>
						</div>
					}
				/>
			</Card>
		);
	};

	let usersData = !tempUserData
		? contactsData.length
			? contactsData
			: null
		: tempUserData;

	return (
		<Spin spinning={filterLoading}>
			<List
				size={"100%"}
				pagination={
					usersData
						? {
								pageSize: 6,
						  }
						: false
				}
				grid={{
					gutter: 8,
					xs: 1,
					sm: 2,
					md: 3,
					lg: 3,
					xl: 3,
					xxl: 6,
				}}
				loading={loading ? loading : filterLoading}
				dataSource={usersData ? usersData : []}
				renderItem={(user, index) =>
					user ? <List.Item>{card(user, index)}</List.Item> : null
				}
			/>
		</Spin>
	);
};

export { View };
