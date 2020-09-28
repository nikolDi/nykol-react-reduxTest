import React from "react";
import "./style.scss";
import { Row, Col, Statistic, List, Typography } from "antd";
import { currentNationalities } from "utils";

const View = ({ contactsData, tempUserData }) => {
	const { Text } = Typography;

	const usersData = !tempUserData
		? contactsData.length
			? contactsData
			: []
		: tempUserData;

	const genderCounter = (genderVal) =>
		usersData.filter((el) => el.gender === genderVal).length;
	const maleCount = genderCounter("male");
	const femaleCount = genderCounter("female");
	const indeterminateCount = genderCounter("indeterminate");

	const predominate =
		maleCount > femaleCount
			? "Men"
			: maleCount < femaleCount
			? "Women"
			: maleCount === femaleCount
			? "No one"
			: null;

	const statisticItem = (title, value) => (
		<Col
			xs={{ span: 12, offset: 0 }}
			md={{ span: 6, offset: 0 }}
			xl={{ span: 3, offset: 0 }}
			xxl={{ span: 2, offset: 0 }}
		>
			<Statistic title={title} value={value} />
		</Col>
	);

	const mainStatistic = (
		<>
			<Row grid={{ xs: 1, sm: 2, md: 24, lg: 24 }}>
				{statisticItem("Collection Size", usersData.length)}
				{statisticItem("Male", maleCount)}
				{statisticItem("Female", femaleCount)}
				{statisticItem("Indeterminate", indeterminateCount)}
			</Row>
			<Row gutter={24}>
				<Col
					xs={{ span: 12, offset: 0 }}
					md={{ span: 12, offset: 6 }}
					xl={{ span: 6, offset: 3 }}
					xxl={{ span: 4, offset: 2 }}
					className={"staistic__block-info"}
				>
					<Text mark>{predominate} predominate</Text>
				</Col>
			</Row>
		</>
	);

	const nationalities = (
		<List
			grid={{
				gutter: 16,
				xs: 1,
				sm: 2,
				md: 3,
				lg: 4,
				xl: 6,
				xxl: 6,
			}}
			dataSource={currentNationalities(usersData)}
			renderItem={(nation, index) => (
				<List.Item>
					<span key={index}>
						<span className={"staistic__nat--item-title"}>
							{nation}:
						</span>
						<span>
							{" "}
							{
								usersData.filter(
									(el) => el.nationality.name === nation
								).length
							}{" "}
							contacts
						</span>
					</span>
				</List.Item>
			)}
		/>
	);

	return (
		<div className={"staistic"}>
			<h3>Statistic</h3>
			<div>{mainStatistic}</div>
			<div className={"staistic__nat"}>
				<h4>Nationalities</h4>
				{nationalities}
			</div>
		</div>
	);
};

export { View };
