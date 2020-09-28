import React from "react";
import { useHistory } from "react-router-dom";
import { Tag, Button, Row, Col, Typography, Avatar, Divider } from "antd";
import { DoubleLeftOutlined } from "@ant-design/icons";
import { addressFormat } from "utils";
import "./style.scss";

const View = ({ userData }) => {
	let history = useHistory();
	const goBack = () => history.push("/contacts");

	const {
		fullName,
		largePhoto,
		age,
		email,
		phone,
		location,
		nationality,
	} = userData;
	const { Paragraph, Title, Text } = Typography;

	return (
		<div>
			<div className="details__header">
				<h1>User Details</h1>
			</div>

			<Row type="flex" justify={"center"} gutter={[28, 28]}>
				<Col>
					<Avatar shape="square" size={300} src={largePhoto} />
				</Col>
				<Col>
					<div className={"details__content--info"}>
						<div>
							<Title level={3}>
								{fullName}
								<Text type="secondary">
									{" "}
									<small>({age} years)</small>
								</Text>
							</Title>
						</div>

						<Divider dashed />
						<div className={"card__contentBlock-details"}>
							<span
								className={"card__contentBlock-details--email"}
							>
								<Paragraph
									copyable={{ text: email }}
								></Paragraph>
								<a href={`mailto: ${email}`}>{email}</a>
							</span>
							<span
								className={"card__contentBlock-details--phone"}
							>
								<Paragraph
									copyable={{ text: phone }}
								></Paragraph>
								<a href={`tel: ${phone}`}>{phone}</a>
							</span>
							<span
								className={
									"card__contentBlock-details--address"
								}
							>
								<Paragraph
									copyable={{ text: location }}
								></Paragraph>
								{addressFormat(location)}
							</span>
						</div>
						<Divider dashed />
					</div>
					<div>
						<Tag color={nationality.color}>{nationality.name}</Tag>
					</div>
				</Col>
			</Row>
			<Row justify={"center"}>
				<Col>
					<Button
						type="primary"
						icon={<DoubleLeftOutlined />}
						onClick={() => goBack()}
					>
						Back
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export { View };
