import React, { useState, useEffect } from "react";
import { ContactsTable } from "../ContactsTable";
import { ContactsFilter } from "../ContactsFilter";
import { ContactsView } from "../ContactsView";
import { ContactsList } from "../ContactsList";
import { ContactsStatistic } from "../ContactsStatistic";
import "./style.scss";

const View = ({ getContacts }) => {
	useEffect(() => {
		getContacts();
	}, [getContacts]);

	let localType = JSON.parse(localStorage.getItem("tableViewType"));
	const [tempUserData, setTempUserData] = useState(null);
	const [filterLoading, setFilterLoading] = useState(false);
	const [tableViewType, setTableViewType] = useState(
		!localStorage.getItem("tableViewType") ? true : localType
	);

	// Loading data simulate
	const loadingSimulate = () => {
		setFilterLoading(true);
		setTimeout(() => setFilterLoading(false), 400);
	};

	// Refetch data from API
	const refetch = () => getContacts();

	return (
		<div className={"page pageContacts"}>
			<div className={"page__header"}>
				<h1 className={"page__header--title"}>Contacts</h1>
			</div>
			<div className={"page__body"}>
				<ContactsView
					refetch={refetch}
					tableType={tableViewType}
					setTableType={setTableViewType}
				/>
				<ContactsFilter
					setLoading={loadingSimulate}
					changeUserData={setTempUserData}
					tempUserData={tempUserData}
				/>
				{tableViewType ? (
					<ContactsTable
						filterLoading={filterLoading}
						tempUserData={tempUserData}
					/>
				) : (
					<ContactsList
						filterLoading={filterLoading}
						tempUserData={tempUserData}
					/>
				)}
				<ContactsStatistic tempUserData={tempUserData} />
			</div>
		</div>
	);
};

export { View };
