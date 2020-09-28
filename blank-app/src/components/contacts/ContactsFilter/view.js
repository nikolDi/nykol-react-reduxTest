import React, { useState, useEffect } from "react";
import { Form, Input, Select, Row, Col, Button, Checkbox } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { NATIONALITIES } from "constants/nationalities";
import "./style.scss";

const View = ({ contactsData, changeUserData, tempUserData, setLoading }) => {
	// Filter fields state
	const [nameVal, setNameVal] = useState("");
	const [genderVal, setGenderVal] = useState("");
	const [nationalityVal, setNationalityVal] = useState([]);
	const [log, setLog] = useState(null);

	const { Option } = Select;

	const filterDataHandler = () => {
		// Simulate Data loading
		setLoading();

		let newUserData = contactsData;
		if (nameVal) {
			newUserData = newUserData.filter((user) =>
				user.fullName
					.toLocaleLowerCase()
					.includes(nameVal.toLocaleLowerCase())
			);
		}
		if (genderVal) {
			newUserData = newUserData.filter(
				(user) => user.gender === genderVal
			);
		}
		if (nationalityVal.length) {
			let nationData = [];
			nationalityVal.map(
				(el) =>
					(nationData = [
						...nationData,
						...newUserData.filter(
							(user) => user.nationality.name === el
						),
					])
			);
			newUserData = nationData;
		}

		// Setting filtered userList to state
		changeUserData(newUserData);
	};

	// Filtering user data every time, when one of filter fields updates
	useEffect(() => {
		if (nameVal || genderVal || nationalityVal.length || log) {
			filterDataHandler();
		}
	}, [nameVal, genderVal, nationalityVal, log]);

	// Set values by type
	const updatingValues = (type, value) => {
		switch (type) {
			case "fullName":
				setNameVal(value);
				break;
			case "gender":
				value !== "indeterminate"
					? setGenderVal(value)
					: setGenderVal("");
				break;
			case "nationality":
				setNationalityVal(value);
				break;
			default:
				return value;
		}
		setLog(log ? log + 1 : 1);
	};

	const changeValueHandler = async (type, value) => {
		await updatingValues(type, value);
	};

	const creatorChangeHandler = (e) => {
		setLog(log ? log + 1 : 1);
	};

	const fullNameInput = (
		<Form.Item>
			<Input
				value={nameVal}
				className={"filter__block-input-name"}
				placeholder="Search by full name"
				onChange={(text) =>
					changeValueHandler("fullName", text.target.value)
				}
			/>
		</Form.Item>
	);

	const genderSelect = (
		<Form.Item>
			<Select
				defaultValue={[]}
				value={!genderVal ? null : genderVal}
				placeholder="gender"
				onChange={(value) => changeValueHandler("gender", value)}
			>
				<Option value="male">Male</Option>
				<Option value="female">Female</Option>
				<Option value="indeterminate">Indeterminate</Option>
			</Select>
		</Form.Item>
	);

	const nationalityInput = (
		<Form.Item name="select-multiple">
			<Select
				mode="multiple"
				allowClear
				autoClearSearchValue={true}
				value={nationalityVal}
				placeholder="Nationality"
				onChange={(value) => changeValueHandler("nationality", value)}
			>
				{Object.entries(NATIONALITIES).map((nation, key) => (
					<Option key={key} value={nation[1].name}>
						{nation[1].name}
					</Option>
				))}
			</Select>
		</Form.Item>
	);

	// Clear all form fields
	const clearFilter = () => {
		setNameVal("");
		setGenderVal("");
		setNationalityVal([]);
		changeUserData(contactsData);
	};

	return (
		<div className={"filter__block"}>
			<Form className="ant-advanced-search-form">
				<Row gutter={[16, 14]} className={"form-row"}>
					<Col
						className="gutter-row"
						xs={{ span: 24, offset: 0 }}
						md={{ span: 16 }}
						xl={{ span: 6 }}
						xxl={{ span: 8 }}
					>
						{fullNameInput}
					</Col>
					<Col
						className="gutter-row"
						xs={{ span: 24, offset: 0 }}
						md={{ span: 8 }}
						xl={{ span: 4 }}
						xxl={{ span: 3 }}
					>
						{genderSelect}
					</Col>
					<Col
						className="gutter-row"
						xs={{ span: 24, offset: 0 }}
						md={{ span: 16 }}
						xl={{ span: 6 }}
						xxl={{ span: 7 }}
					>
						{nationalityInput}
					</Col>
					<Col className="gutter-row" span={3}>
						<Checkbox onChange={creatorChangeHandler}>
							I am creator
						</Checkbox>
					</Col>
					<Col className="gutter-row" span={3}>
						<Button
							type="link"
							htmlType="button"
							onClick={() => clearFilter()}
							icon={<CloseOutlined />}
							disabled={
								!nameVal && !genderVal && !nationalityVal.length
									? true
									: false
							}
						>
							Clear
						</Button>
					</Col>
				</Row>
			</Form>
		</div>
	);
};

export { View };
