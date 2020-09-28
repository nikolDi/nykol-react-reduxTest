import React from "react";
import { Link } from "react-router-dom";
import { Table, Tag, Typography, Skeleton } from "antd";
import { addressFormat } from "utils";
import "./style.scss";

const View = ({ contactsData, tempUserData, loading, filterLoading }) => {
	const { Paragraph } = Typography;
	const columns = [
		{
			title: "Avatar",
			dataIndex: "avatar",
			key: "avatar",
			render: (url, user) => (
				<img
					className={"table__avatar-image"}
					src={url}
					alt={user.fullName}
				/>
			),
		},
		{
			title: "Full name",
			dataIndex: "fullName",
			key: "fullName",
			sorter: (a, b) => (a.fullName > b.fullName ? 1 : -1),
			render: (fullName, user) => (
				<span className={"table__name-block"}>
					<Link
						to={{
							pathname: `/contacts/${user.index}`,
							state: { userData: user },
						}}
					>
						{user.namePrefix}. {fullName}
					</Link>
				</span>
			),
		},
		{
			title: "Birthday",
			dataIndex: "birthday",
			key: "birthday",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
			render: (email) => (
				<span className={"table__email-block"}>
					<Paragraph copyable={{ text: email }}></Paragraph>
					<a href={`mailto: ${email}`}>{email}</a>
				</span>
			),
		},
		{
			title: "Phone",
			dataIndex: "phone",
			key: "phone",
			render: (phone) => (
				<span className={"table__email-block"}>
					<Paragraph copyable={{ text: phone }}></Paragraph>
					<a href={`tel: ${phone}`}>{phone}</a>
				</span>
			),
		},
		{
			title: "Location",
			dataIndex: "location",
			key: "location",
			render: (location) => (
				<span className={"table__location-block"}>
					{addressFormat(location)}
				</span>
			),
		},
		{
			title: "Nationality",
			dataIndex: "nationality",
			key: "nationality",
			render: (nationality) => (
				<span className={"table__nat-block"}>
					<Tag color={nationality.color}>{nationality.name}</Tag>
				</span>
			),
		},
	];

	const usersData = !tempUserData
		? contactsData.length
			? contactsData
			: []
		: tempUserData;

	return (
		<>
			<Table
				tableLayout="auto"
				rowKey={(record) => record.id}
				dataSource={usersData}
				columns={columns}
				className={"table__main"}
				scroll={{ x: 800 }}
				sticky
				loading={loading ? loading : filterLoading}
			/>
			<Skeleton
				active={true}
				rows={20}
				loading={loading ? loading : filterLoading}
				avatar
			/>
		</>
	);
};

export { View };
