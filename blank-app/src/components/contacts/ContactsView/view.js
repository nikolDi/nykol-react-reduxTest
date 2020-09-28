import React from "react";
import "./style.scss";
import { Button, Tooltip } from "antd";
import {
	ReloadOutlined,
	BarsOutlined,
	AppstoreOutlined,
} from "@ant-design/icons";

const View = ({ refetch, tableType, setTableType }) => {
	// Set view type to LocalStorage
	const setToLocalState = (tableType) => {
		setTableType(tableType);
		localStorage.setItem("tableViewType", tableType);
	};

	return (
		<div className={"view__block"}>
			<Tooltip title="reload">
				<Button
					onClick={() => refetch()}
					shape="circle"
					className={"view__block-reload"}
					icon={<ReloadOutlined />}
				/>
			</Tooltip>
			<Tooltip title="Tiled view">
				<Button
					onClick={() => setToLocalState(false)}
					type={tableType ? false : "primary"}
					icon={<AppstoreOutlined />}
				/>
			</Tooltip>
			<Tooltip title="Table view">
				<Button
					onClick={() => setToLocalState(true)}
					type={tableType ? "primary" : false}
					icon={<BarsOutlined />}
				/>
			</Tooltip>
		</div>
	);
};

export { View };
